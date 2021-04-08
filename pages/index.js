import Head from 'next/head';
import { Code, Heading, Text, Button, Icon, Flex } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();
  return (
    <Flex as="main" direction="column">
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Heading>Fast Feedback</Heading>
      <Icon color="black" name="logo" size="32px" />
      <Text>
        Curent user: <Code>{auth.user ? auth.user.email : "no users"}</Code>
      </Text>
      <br />
      {auth.user ? (
        <Button onClick={(e) => auth.signout()}>Sign Out</Button>
      ) : (
        <Button onClick={(e) => auth.siginWithGithub()}>Sign In</Button>
      )}
    </Flex>
  )
}
