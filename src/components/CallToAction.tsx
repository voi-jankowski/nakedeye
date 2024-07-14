// src/components/CallToAction.tsx
import { Box, Flex, Heading, Container, Text, Spacer } from "@chakra-ui/react";
import ContactForm from "./ContactForm";

const CallToAction = () => (
  <Container maxW="container.xl" py={16}>
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
    >
      <Box textAlign={{ base: "center", md: "left" }} mb={{ base: 8, md: 0 }}>
        <Heading
          as="h2"
          size="3xl"
          color="indigo"
          lineHeight="shorter"
          textAlign={"end"}
        >
          Let’s create something{" "}
          <Text as="span" color="blue" fontSize="8xl">
            cool
          </Text>{" "}
          together
        </Heading>
        <Text fontSize="xl" color="blue" mt={4}>
          Same day reply!
        </Text>
      </Box>
      <Spacer />
      <Container maxW="container.sm">
        <ContactForm />
      </Container>
    </Flex>
  </Container>
);

export default CallToAction;
