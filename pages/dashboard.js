import Head from 'next/head';
import { Code, Heading, Text, Button, Icon, Flex } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState'


const Dashboard = () => {
  const auth = useAuth();
    if(!auth.user){
        return 'Loading...'
    }
    return <EmptyState/>;
};

export default Dashboard
