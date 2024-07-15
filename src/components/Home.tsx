// src/components/Home.tsx
import { Box, Container, VStack } from "@chakra-ui/react";
import Subheading from "./Subheading";
import Benefits from "./Benefits";
import Projects from "./Projects";
import CallToAction from "./CallToAction";

const Home = () => (
  <Container maxW="container.2xl" bg="rgb(255, 255, 255)" p={0}>
    <VStack
      spacing={0}
      m={0}
      bg="url('https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68')"
      bgSize="cover"
      bgPosition="center"
    >
      <Box
        height={{ base: "50vh", md: "65vh" }}
        width="100%"
        pt={{ base: 20, sm: 24, md: 36 }}
        m={0}
      >
        <Subheading />
      </Box>
      <Box width="100%" p={0} m={0}>
        <Benefits />
      </Box>
    </VStack>
    <Box bg="offwhite">
      <Projects />
    </Box>
    <Box bg="offwhite">
      <CallToAction />
    </Box>
  </Container>
);

export default Home;
