// src/components/WelcomeHeading.tsx
import { VStack, Text, Button } from "@chakra-ui/react";
import ContactDrawer from "./ContactDrawer";

const WelcomeHeading = () => (
  <VStack
    height="100%"
    justifyContent="center"
    alignItems="center"
    bg="rgba(255, 255, 255, 0.2)"
    m={0}
    p={0}
  >
    <Text fontSize="7xl" fontWeight="bold" color="blue">
      nakedEyeCreative
    </Text>
    <Text fontSize="3xl" color="indigo">
      Social Media VFX Marketing Specialist
    </Text>
    <ContactDrawer />
  </VStack>
);

export default WelcomeHeading;
