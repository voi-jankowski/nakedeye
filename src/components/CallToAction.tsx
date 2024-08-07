// src/components/CallToAction.tsx
import { Box, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import ContactForm from "./ContactForm";

const CallToAction = () => (
  <Box bg="rgba(245, 245, 245, 0.4)" py={8} px={4} mx={6}>
    <Flex
      direction={{ base: "column", lg: "row" }}
      align="right"
      justify="center"
    >
      <Box mb={{ base: 8, md: 0 }}>
        <VStack align="end" spacing={4}>
          <Heading as="h2" size="3xl" color="black" lineHeight="shorter">
            <Text as="span" bg="black" color="white" px={2}>
              let's.
            </Text>
          </Heading>
          <Heading as="h2" size="3xl" color="black" lineHeight="shorter">
            <Text as="span" bg="black" color="white" px={2}>
              make.
            </Text>
          </Heading>
          <Heading as="h2" size="3xl" color="black" lineHeight="shorter">
            <Text as="span" bg="black" color="white" px={2} mr={2}>
              you.
            </Text>
          </Heading>
          <Heading as="h2" size="3xl" color="black" lineHeight="shorter">
            <Text as="span" bg="black" color="yellow" px={2}>
              something.
            </Text>
          </Heading>
          <Heading as="h2" size="3xl" color="black" lineHeight="shorter">
            <Text as="span" bg="black" color="white" px={2} mr={3}>
              rad.
            </Text>
          </Heading>
        </VStack>
      </Box>
      <Box
        width={{
          base: "100%",
          sm: "80%",
          md: "60%",
          lg: "50%",
          xl: "40%",
          "2xl": "30%",
        }}
        ml={{ base: 0, md: 8 }}
      >
        <ContactForm />
      </Box>
    </Flex>
  </Box>
);

export default CallToAction;
