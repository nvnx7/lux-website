import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import fonts from './fonts';
import components from './components';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        background: 'blackAlpha.900',
      },
      '::-webkit-scrollbar': { width: '2px' },
      '::-webkit-scrollbar-track': { background: 'none' },
      '::-webkit-scrollbar-thumb': { background: '#ccc', borderRadius: '8px' },
    },
  },
  fonts,
  colors,
  components,
});

export default theme;
