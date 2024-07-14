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
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const ContactForm = () => {
  const inputStyle = {
    borderBottom: "2px solid",
    borderRadius: "0",
    borderColor: "gray.400",
    _focus: { borderColor: "blue.500" },
  };

  return (
    <VStack spacing={5} width="100%">
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <InputGroup>
          <InputLeftElement children={<BsPerson />} />
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            sx={inputStyle}
          />
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <InputGroup>
          <InputLeftElement children={<MdOutlineEmail />} />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            sx={inputStyle}
          />
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Company</FormLabel>
        <InputGroup>
          <InputLeftElement children={<HiOutlineOfficeBuilding />} />
          <Input
            type="text"
            name="company"
            placeholder="Your Company"
            sx={inputStyle}
          />
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Message</FormLabel>
        <Textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          resize="none"
          sx={inputStyle}
        />
      </FormControl>
      <Button variant="solid" width="100%" colorScheme="blue">
        Send Message
      </Button>
    </VStack>
  );
};

export default ContactForm;
