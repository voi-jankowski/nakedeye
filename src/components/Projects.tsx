// src/components/Projects.tsx
import { Box, Container, Text } from "@chakra-ui/react";

const Projects = () => (
  <Container maxW="container.2xl" p={0} m={0}>
    <Box
      height={{ base: "50vh", md: "50vh" }}
      width="100%"
      bg="url('https://fastly.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU')"
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="xl"
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
