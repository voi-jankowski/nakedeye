// src/components/Header.tsx
import { Flex, HStack, Text } from "@chakra-ui/react";

const Header = () => (
  <Flex
    as="header"
    position="fixed"
    top="0"
    left="0"
    width="100%"
    bg="transparent"
    p={2}
    zIndex={1}
    alignItems="center"
    justifyContent="space-between"
  >
    <Text color="darknavy" fontSize="lg" fontWeight="bold">
      Brand Name
    </Text>
    <HStack spacing={8} color="darknavy" fontSize="sm">
      <Text>Menu Item 1</Text>
      <Text>Menu Item 2</Text>
      <Text>Menu Item 3</Text>
    </HStack>
  </Flex>
);

export default Header;
