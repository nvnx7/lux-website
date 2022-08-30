import {
  Box,
  Flex,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Layout } from 'components/layout';
import Head from 'next/head';
import { FiAlertCircle as AlertIcon } from 'react-icons/fi';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Lux Wallet</title>
      </Head>
      <VStack spacing={4} w="full">
        <HStack>
          <AlertIcon size={32} />
          <Heading>Known Issues</Heading>
        </HStack>

        <List w="80%" minW="sm" maxW="4xl">
          <ListItem>
            <Text fontWeight="semibold">Vaults are not appearing in vault manager?</Text>
            <Text fontSize="sm">
              This is because of a known bug in the implementation of LSP smart contracts from Lusko
              repository - which fails to register a vault to Universal Profile&apos;s{' '}
              <code>LSP10Vaults[]</code> entry. Make sure your vault is registered there. If you are
              a developer you can manually register it via following code.
            </Text>
            <Box fontSize="sm">
              <pre>
                <code>{issueCode}</code>
              </pre>
            </Box>
          </ListItem>
        </List>
      </VStack>
    </Layout>
  );
}

const issueCode = `
const universalProfile = '0x...';
const vaultAddress = '0x..';
const profile = new ERC725(schema, universalProfile, web3.currentProvider, config);
const encodedData = profile.encodeData({
  keyName: 'LSP10Vaults[]',
  value: [vaultAddress],
});

// Contracts
const up = new web3.eth.Contract(UniversalProfile.abi, universalProfile);
const kmAddress = await up.methods.owner().call();
const km = new web3.eth.Contract(KeyManager.abi, kmAddress);

// Payloads
const upPayload = await up.methods['setData(bytes32[],bytes[])'](
  encodedData.keys,
  encodedData.values
).encodeABI();

await km.methods.execute(upPayload).send(
    {
        from: eoa.address,
        to: kmAddress,
        gas: 300_000,
    }
);
`;
