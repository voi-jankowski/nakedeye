// src/components/CallToAction.tsx
import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import ContactForm from "./ContactForm";

const CallToAction = () => (
  <Box bg="rgba(245, 245, 245, 0.4)" py={8} px={4}>
    <VStack spacing={6} align="center">
      <Heading as="h2" size="xl" color="indigo">
        Are you ready to get in touch?
      </Heading>
      <Text fontSize="lg" color="blue">
        Same day reply!
      </Text>
      <ContactForm />
    </VStack>
  </Box>
);

export default CallToAction;
