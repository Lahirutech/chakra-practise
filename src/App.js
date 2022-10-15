import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import About from './components/About';
import Info from './components/Info';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <About />
      <Info />
    </ChakraProvider>
  );
}

export default App;
