import { Flex, FlexProps, HStack } from '@chakra-ui/react';

import { Logo, Link, DownloadButton } from 'components/common';

const Header = ({ ...props }) => {
  return (
    <Flex p={4} justify="space-between" {...props}>
      <Link href="/">
        <Logo />
      </Link>
      <HStack spacing={8}>
        <HStack as="nav" spacing={4}>
          <Link href="/">Home</Link>
          <DownloadButton size="md" />
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Header;
