// src/components/ContactForm.tsx

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  VStack,
  Textarea,
} from "@chakra-ui/react";
import { MdBorderColor } from "react-icons/md";

const ContactForm = () => {
  const inputStyle = {
    border: "none",
    borderBottom: "2px solid",
    borderRadius: "0",
    borderColor: "black",
    _focus: { borderColor: "yellow" },
  };
  const textAreaStyle = {
    border: "none",
    borderBottom: "2px solid",
    borderRadius: "0",
    borderColor: "black",
    _focus: {
      borderColor: "yellow",
      borderBottom: "2px solid",
      outline: "none",
      boxShadow: "none",
    },
  };

  return (
    <VStack spacing={5} width="80%">
      <FormControl isRequired>
        <FormLabel color="black" className="urbanist-unique">
          name
        </FormLabel>
        <InputGroup>
          {/* <InputLeftElement children={<BsPerson />} /> */}
          <Input
            type="text"
            name="name"
            // placeholder="Your Name"
            sx={inputStyle}
          />
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel color="black">email</FormLabel>
        <InputGroup>
          {/* <InputLeftElement children={<MdOutlineEmail />} /> */}
          <Input
            type="email"
            name="email"
            // placeholder="Your Email"
            sx={inputStyle}
          />
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel color="black">company</FormLabel>
        <InputGroup>
          {/* <InputLeftElement children={<HiOutlineOfficeBuilding />} /> */}
          <Input
            type="text"
            name="company"
            // placeholder="Your Company"
            sx={inputStyle}
          />
        </InputGroup>
      </FormControl>

      <FormControl isRequired mt={16}>
        <FormLabel color="black">message</FormLabel>
        <Textarea
          name="message"
          sx={textAreaStyle}
          rows={2}
          resize="vertical"
        />
      </FormControl>
      <Button variant="solid" width="100%" colorScheme="blackAlpha">
        Send Message
      </Button>
    </VStack>
  );
};

export default ContactForm;
