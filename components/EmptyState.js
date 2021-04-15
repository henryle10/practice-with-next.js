import React, { useState } from 'react';
import { Heading, Flex, Text, Button } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import AddSiteModal from './AddSiteModal';
import DashboardShell from '@/components/DashboardShell';


const EmptyState = () => {
  const { user } = useAuth();

  return (
    <DashboardShell>
      <Flex
        width="100%"
        backgroundColor="white"
        borderRadius="8px"
        p={16}
        justify="center"
        align="center"
        direction="column"
      >
        <Heading size="lg" mb={2}>
          Get feedback on your site instantly.
      </Heading>
        <Text mb={4}>Start today, then grow with us 🌱</Text>
        <AddSiteModal />
      </Flex>
    </DashboardShell>
  );
};

export default EmptyState;