import React from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" p={4} bg="gray.200" display="flex" justifyContent="space-between">
      <Icon as={FaFacebook} w={6} h={6} />
      <Icon as={FaTwitter} w={6} h={6} />
      <Icon as={FaInstagram} w={6} h={6} />
    </Box>
  );
};

export default Footer;