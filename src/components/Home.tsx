// src/components/Home.tsx
import { Box, Container, VStack } from "@chakra-ui/react";
import WelcomeHeading from "./WelcomeHeading";
import Benefits from "./Benefits";
import Projects from "./Projects";

const Home = () => (
  <Container maxW="container.2xl" bg="rgb(255, 255, 255)" p={0}>
    <VStack
      spacing={0}
      m={0}
      bg="url('https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68')"
      bgSize="cover"
      bgPosition="center"
    >
      <Box height="65vh" width="100%" p={0} m={0}>
        <WelcomeHeading />
      </Box>
      <Box width="100%" p={0} m={0}>
        <Benefits />
      </Box>
    </VStack>
    <Box bg="transparent">
      <Projects />
    </Box>
  </Container>
);

export default Home;
