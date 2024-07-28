// src/components/WhatWeDo.tsx
import { Box, Text, VStack, Flex } from "@chakra-ui/react";

const WhatWeDo = () => {
  return (
    <Box height="100%" bg="transparent" p={8}>
      <Flex
        align="center"
        flexWrap={"wrap"}
        justifyContent={"center"}
        // alignContent="space-between"
        height="100%"
      >
        <Text
          fontSize="2xl"
          fontWeight={700}
          color="white"
          bg="rgba(0, 0, 0, 0.6)"
          p={0}
          m={2}
        >
          We craft advanced renders that
        </Text>
        <Text
          fontSize="2xl"
          fontWeight={700}
          color="white"
          bg="rgba(0, 0, 0, 0.6)"
          px={"10px"}
          py={"5px"}
          m={0.5}
        >
          evoke immersive experiences,
        </Text>
        <Text
          fontSize="2xl"
          fontWeight={700}
          color="white"
          bg="rgba(0, 0, 0, 0.6)"
          p={0}
          m={3}
        >
          pushing the limits of reality through
        </Text>
        <Text
          fontSize="2xl"
          fontWeight={700}
          color="white"
          bg="rgba(0, 0, 0, 0.6)"
          px={"10px"}
          py={"5px"}
          m={3}
        >
          interactive content,
        </Text>
        <Text
          fontSize="2xl"
          fontWeight={700}
          color="white"
          bg="rgba(0, 0, 0, 0.6)"
          px={"12px"}
          py={"5px"}
          m={0.5}
        >
          that captivates{" "}
          <Text as="span" fontSize="3xl">
            attention.
          </Text>
        </Text>
      </Flex>
    </Box>
  );
};

export default WhatWeDo;
