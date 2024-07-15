// src/components/Header.tsx
import { Flex, HStack, Text, Image } from "@chakra-ui/react";

const Header = () => (
  <Flex
    as="header"
    position="fixed"
    h={{ base: 16, sm: 20, md: 28, lg: 32, xl: 32, "2xl": 36 }}
    top="0"
    left="0"
    width="100%"
    bg="black"
    p={{ base: 6, sm: 6, md: 8, lg: 10, xl: 10, "2xl": 16 }}
    zIndex={1}
    justifyContent="space-between"
    alignItems="center"
  >
    <Image
      src="public/assets/Naked_Eye.png"
      alt="Logo"
      width={{
        base: 60,
        sm: 72,
        md: 96,
        lg: "28rem",
        xl: "28rem",
        "2xl": "30rem",
      }}
      pt={{ base: 10, sm: 12, md: 20, lg: 20, xl: 20, "2xl": 20 }}
    />
    <HStack spacing={8} color="blue" fontWeight={"bold"} fontSize={"md"}>
      <Text>Menu Item 1</Text>?
    </HStack>
  </Flex>
);

export default Header;
