// src/components/ContactForm.tsx
import {
  Button,
  FormControl,
  FormLabel,
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
    <VStack spacing={5} rounded={0}>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <InputGroup>
          <InputLeftElement children={<BsPerson />} />
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            border={"none"}
            borderBottom={"1px solid"}
          />
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
          rows={12}
          resize="none"
          //   rounded={0}
        />
      </FormControl>
      <Button variant="solid" color={"indigo"} width={"100%"}>
        Send Message
      </Button>
    </VStack>
  );
};

export default ContactForm;
