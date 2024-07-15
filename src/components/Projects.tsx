// src/components/Projects.tsx
import { Box, Container, Text } from "@chakra-ui/react";

const Projects = () => (
  <Container maxW="container.2xl" p={0} m={0}>
    <Box
      height={{ base: "50vh", md: "50vh" }}
      width="100%"
      bg="url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
        fontWeight="bold"
        color="white"
        textAlign="center"
      >
        see what we can do.
      </Text>
    </Box>
  </Container>
);

export default Projects;
