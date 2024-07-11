import { Box, Container, Flex, Text } from "@chakra-ui/react";

const Home = () => (
  <Container maxW="container.xl" bg="white" marginTop="4rem" p={0}>
    <Box
      height="80vh"
      bgImage="url('/path/to/your/image.jpg')"
      bgSize="cover"
      bgPosition="center"
    />
    <Box height="20vh" bg="transparent">
      <Flex height="100%" justifyContent="space-around" alignItems="center">
        <Text color="darknavy">Element 1</Text>
        <Text color="darknavy">Element 2</Text>
        <Text color="darknavy">Element 3</Text>
      </Flex>
    </Box>
  </Container>
);

export default Home;
