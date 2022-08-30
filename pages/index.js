import { Button, Heading, HStack, List, ListIcon, ListItem, Text, VStack } from '@chakra-ui/react';
import { DownloadButton, Logo } from 'components/common';
import { Layout } from 'components/layout';
import Head from 'next/head';
import { FiCheck as CheckIcon } from 'react-icons/fi';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Lux Wallet</title>
      </Head>
      <HStack w="full" h="full" alignItems="stretch" py={16} px={8} flexWrap="wrap">
        <VStack justify="center" alignItems="start" flex={1} spacing={8} h="full">
          <HStack spacing={4}>
            <Logo size={100} />
            <VStack alignItems="flex-start">
              <Heading fontSize="6xl" color="orange.400">
                LUX Wallet
              </Heading>
              <Text fontSize="lg" textAlign="center" alignItems="start" fontWeight="semibold">
                A self-custodial wallet for Lukso Network.
              </Text>
            </VStack>
          </HStack>

          <List spacing={4} fontWeight="semibold" px={8} pb={4}>
            <ListItem>
              <ListIcon as={CheckIcon} color="orange.500" />
              Self Custodial. No central servers storing your credentials.
            </ListItem>

            <ListItem>
              <ListIcon as={CheckIcon} color="orange.500" />
              Multi - language Support.
            </ListItem>

            <ListItem>
              <ListIcon as={CheckIcon} color="orange.500" />
              Manage Your Account, Universal Profile and Vaults.
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <ListIcon as={CheckIcon} color="orange.500" />
              Easy To Use, Beautiful UI
            </ListItem>
          </List>

          <VStack>
            <DownloadButton />
            <Text fontSize="sm" textAlign="center" color="gray.400" px={6}>
              Note: Currently in development. Do NOT use sensitive keys.
            </Text>
          </VStack>
        </VStack>
        <VStack flex={1}>
          <Heading>LOL</Heading>
        </VStack>
      </HStack>
    </Layout>
  );
}
