import React from 'react';
import { Box, Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as="header" p={4} bg="blue.500" color="white">
      <Button colorScheme="blue">Sign In</Button>
    </Box>
  );
};

export default Header;