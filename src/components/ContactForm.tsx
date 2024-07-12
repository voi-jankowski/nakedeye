// src/components/ContactForm.tsx
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  Textarea,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <Flex
      bg="rgb(255, 255, 255)"
      align="center"
      justify="center"
      id="contact"
      p={4}
    >
      <Box borderRadius="lg" m={4} p={4} w="full" maxW="md">
        <VStack spacing={5}>
          <Heading fontSize="3xl" color="indigo">
            Get in Touch
          </Heading>

          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <InputGroup>
              <InputLeftElement children={<BsPerson />} />
              <Input type="text" name="name" placeholder="Your Name" />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement children={<MdOutlineEmail />} />
              <Input type="email" name="email" placeholder="Your Email" />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              resize="none"
            />
          </FormControl>

          <Button
            colorScheme="blue"
            bg="indigo"
            color="white"
            _hover={{ bg: "darkblue" }}
            width="full"
          >
            Send Message
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default ContactForm;
