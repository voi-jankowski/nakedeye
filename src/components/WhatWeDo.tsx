// src/components/WhatWeDo.tsx
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const WhatWeDo = () => {
  return (
    <Box bg="offwhite" p={8}>
      <Heading as="h2" size="xl" mb={4} color="indigo">
        What We Do
      </Heading>
      <VStack align="start" spacing={4}>
        <Text fontSize="lg" color="blue">
          We craft advanced renders that evoke immersive experiences, pushing
          the limits of reality through interactive content, that captivates
          attention.
        </Text>
      </VStack>
    </Box>
  );
};

export default WhatWeDo;
