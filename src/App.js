import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import About from './components/About';
import Info from './components/Info';
import AuthOne from './components/AuthOne';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <About />
      <Info />
      <AuthOne />
    </ChakraProvider>
  );
}

export default App;
