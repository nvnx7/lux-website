import { Center, HStack, Text } from '@chakra-ui/react';

const Footer = ({ ...props }) => {
  return (
    <HStack as="footer" p={4} w="100%" justify="space-between" {...props}>
      <Center w="full">
        <Text fontSize="md">Copyright (c) Lux wallet</Text>
      </Center>
    </HStack>
  );
};

export default Footer;
