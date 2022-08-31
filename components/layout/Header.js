import { Flex, HStack } from '@chakra-ui/react';

import { Logo, Link, DownloadButton } from 'components/common';

const Header = ({ ...props }) => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} p={4} justify="space-between" {...props}>
      <Link href="/">
        <Logo />
      </Link>
      <HStack w={{ base: 'sm', md: 'md' }}>
        <HStack w="full" as="nav" justify="space-between">
          <Link href="/">Home</Link>
          <Link href="/issues">Issues</Link>
          <DownloadButton size="md" />
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Header;
