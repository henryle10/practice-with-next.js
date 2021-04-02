import React, { useState, useEffect, useContext, createContext } from 'react';
import { createUser } from './db';
import firebase from './firebase'


const authContext = createContext();

export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
};

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const handleUser = (rawUser) => {
        if (rawUser) {
            const user = formatUser(rawUser);

            createUser(user.uid, user);
            setUser(user);
            return user;
        } else {
            setUser(false);
            return false;
        }
    }

    const siginWithGithub = async () => {
        const response = await firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider());
        handleUser(response.user);
    };

    const signout = async () => {
        await firebase
            .auth()
            .signOut();
        return handleUser(false);
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => handleUser(false));
        return () => unsubscribe();
    }, []);

    return {
        user,
        siginWithGithub,
        signout
    };
}

const formatUser = (user) => {
    return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL
    };
};

