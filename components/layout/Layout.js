import { VStack, Box, Divider } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, ...props }) => {
  return (
    <VStack w="full" align={'stretch'} {...props}>
      <Header />
      <Divider />
      <Box minH="81vh" flex={1}>
        {children}
      </Box>
      <Footer />
    </VStack>
  );
};

export default Layout;
