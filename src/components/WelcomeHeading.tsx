// src/components/WelcomeHeading.tsx
import { Box, VStack, Text } from "@chakra-ui/react";

const WelcomeHeading = () => (
  <VStack
    height="75%"
    justifyContent="center"
    alignItems="center"
    bg="rgba(255, 255, 255, 0.1)"
    m={0}
    p={0}
  >
    <Text fontSize="6xl" fontWeight="bold" color="indigo">
      nakedEyeCreative
    </Text>
    <Text fontSize="2xl" color="indigo">
      Social Media VFX Marketing Specialist
    </Text>
  </VStack>
);

export default WelcomeHeading;
