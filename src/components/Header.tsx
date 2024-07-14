// src/components/Header.tsx
import { Container, Flex, HStack, Text } from "@chakra-ui/react";

const Header = () => (
  <Flex
    as="header"
    position="fixed"
    height={32}
    top="0"
    left="0"
    width="100%"
    bg="offwhite"
    p={2}
    zIndex={1}
  >
    <Container
      maxW="container.xl"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text color="blue" fontSize="2xl" fontWeight="bold">
        nakedEyeCreative
      </Text>
      <HStack spacing={8} color="blue" fontWeight={"bold"} fontSize={"md"}>
        <Text>Menu Item 1</Text>
        <Text>Menu Item 2</Text>
        <Text>Menu Item 3</Text>
      </HStack>
    </Container>
  </Flex>
);

export default Header;
