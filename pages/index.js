import Head from 'next/head';
import { Button } from '@chakra-ui/button';
import { Code, Heading, Text } from '@chakra-ui/layout';
import { useAuth } from '../lib/auth';

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <main>
        <Head>
          <title>Fast Feedback</title>
        </Head>
        <Heading>Fast Feedback</Heading>
        <Text>
          Curent user: <Code>{auth.user ? auth.user.email : "no users"}</Code>
        </Text>
        <br />
        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.siginWithGithub()}>Sign In</Button>
        )}
      </main>
      <footer>
      </footer>
    </div >
  )
}
