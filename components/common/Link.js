import { Link as ChakraLink } from '@chakra-ui/react';
import { default as NextLink } from 'next/link';

const Link = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} as={href} passHref {...props}>
      <ChakraLink>{children}</ChakraLink>
    </NextLink>
  );
};

export default Link;
