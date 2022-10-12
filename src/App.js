import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import About from './components/About';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <About />
    </ChakraProvider>
  );
}

export default App;
