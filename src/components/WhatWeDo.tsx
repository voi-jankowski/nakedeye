// src/components/WhatWeDo.tsx
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const WhatWeDo = () => {
  return (
    <Box height="100%" bg="rgba(0, 65, 106, 0.4)" p={8}>
      <VStack align="start" spacing={4}>
        <Text fontSize="2xl" fontWeight={500} color="white">
          We craft advanced{" "}
          <Text as="span" fontSize="3xl">
            renders
          </Text>{" "}
          that
        </Text>
        <Text fontSize="2xl" fontWeight={500} color="white">
          evoke{" "}
          <Text as="span" fontSize="3xl">
            immersive
          </Text>{" "}
          experiences, pushing
        </Text>
        <Text fontSize="2xl" fontWeight={500} color="white">
          the limits of reality through{" "}
          <Text as="span" fontSize="3xl">
            interactive
          </Text>{" "}
          content, that
        </Text>
        <Text
          alignSelf={"center"}
          fontSize="2xl"
          fontWeight={500}
          color="white"
        >
          captivates{" "}
          <Text as="span" fontSize="3xl" color="yellow">
            attention.
          </Text>
        </Text>
      </VStack>
    </Box>
  );
};

export default WhatWeDo;
