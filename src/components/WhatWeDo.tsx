// src/components/WhatWeDo.tsx
import { Box, Text, VStack, Flex } from "@chakra-ui/react";

const WhatWeDo = () => {
  return (
    <Box height="100%" bg="rgba(0, 0, 0, 0.8)" p={8}>
      <Flex
        align="start"
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignSelf={"flex-end"}
      >
        <Text
          fontSize="2xl"
          fontWeight={700}
          color="black"
          bg="rgba(255, 255, 255, 0.8)"
          p={0}
          m={3}
        >
          We craft advanced renders that
        </Text>
        <Text
          fontSize="2xl"
          fontWeight={700}
          color="black"
          bg="rgba(255, 255, 255, 0.8)"
          px={"8px"}
          py={"4px"}
          m={0.5}
        >
          evoke immersive experiences,
        </Text>
        <Text
          fontSize="2xl"
          fontWeight={700}
          color="black"
          bg="rgba(255, 255, 255, 0.8)"
          p={0}
          m={3}
        >
          pushing the limits of reality through
        </Text>
        <Text
          fontSize="2xl"
          fontWeight={700}
          color="black"
          bg="rgba(255, 255, 255, 0.8)"
          p={2}
          m={3}
        >
          interactive content,
        </Text>
        <Text
          fontSize="2xl"
          fontWeight={700}
          color="black"
          bg="rgba(255, 255, 255, 0.8)"
          p={2}
          m={3}
        >
          that captivates attention.
        </Text>
      </Flex>
    </Box>
  );
};

export default WhatWeDo;
