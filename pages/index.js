import Head from 'next/head';
import { Code, Heading, Text, Button, Icon, Flex } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState'


const Home = () => {
  const auth = useAuth();

  return (
    <Flex as="main" direction="column" align="center" justify="center" h="100vh">
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Heading>Fast Feedback</Heading>
      <Text>
        Curent user: <Code>{auth.user ? auth.user.email : "no users"}</Code>
      </Text>
      <br />
      {auth.user ? (
        <EmptyState/>
      ) : (
        <Button onClick={(e) => auth.siginWithGithub()}>Sign In</Button>

      )}
    </Flex>
  )
}

export default Home
