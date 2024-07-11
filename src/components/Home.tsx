// src/components/Home.tsx
import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";
import WelcomeHeading from "./WelcomeHeading";
import Benefits from "./Benefits";

const Home = () => (
  <Container maxW="container.2xl" bg="rgb(255, 255, 255)" p={0}>
    <VStack
      height="80vh"
      spacing={0}
      m={0}
      bg="url('https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68')"
      bgSize="cover"
      bgPosition="center"
    >
      <Box height="75vh" width="100%" p={0} m={0}>
        <WelcomeHeading />
      </Box>
      <Box height="25vh" width="100%" p={0} m={0}>
        <Benefits />
      </Box>
    </VStack>
    <Box height="20vh" bg="transparent">
      <Flex height="100%" justifyContent="space-around" alignItems="center">
        <Text color="blue">Element 1</Text>
        <Text color="blue">Element 2</Text>
        <Text color="blue">Element 3</Text>
      </Flex>
    </Box>
  </Container>
);

export default Home;
