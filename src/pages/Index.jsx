import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, Input, Text, VStack, useToast } from "@chakra-ui/react";
import { FaRobot, FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = () => {
    if (username === "student" && password === "dbu2023") {
      setIsLoggedIn(true);
      toast({
        title: "Login Successful",
        description: "Welcome to Debre Berhan University Chatbot!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Incorrect username or password.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Debre Berhan University</Heading>
          <Text mt={4}>Welcome to the official DBU information chatbot.</Text>
        </Box>

        {!isLoggedIn ? (
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <VStack spacing={4}>
              <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <Button rightIcon={<FaSignInAlt />} colorScheme="blue" onClick={handleLogin}>
                Sign In
              </Button>
            </VStack>
          </Box>
        ) : (
          <Flex alignItems="center" justifyContent="center" flexDirection="column">
            <FaRobot size="3em" />
            <Heading fontSize="xl" mt={2}>
              Chatbot
            </Heading>
            <Text mt={2}>Ask me anything about Debre Berhan University!</Text>
            {/* Placeholder for chatbot interaction */}
          </Flex>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
