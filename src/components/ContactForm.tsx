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
    _focus: { borderColor: "gray" },
    _placeholder: {
      color: "black",
      fontSize: "4xl",
      fontWeight: "extrabold",
      fontFamily: "'Urbanist', sans-serif",
    },
  };
  const textAreaStyle = {
    border: "none",
    borderBottom: "2px solid",
    borderRadius: "0",
    borderColor: "black",
    _focus: {
      borderBottom: "2px solid",
      borderColor: "gray",
      outline: "none",
      boxShadow: "none",
    },
  };

  const formLabelStyle = {
    color: "black",
    fontSize: "4xl",
    fontWeight: "extrabold",
    className: "urbanist-unique",
  };

  return (
    <VStack spacing={5}>
      <FormControl isRequired>
        {/* <FormLabel sx={formLabelStyle}>name</FormLabel> */}
        <InputGroup>
          {/* <InputLeftElement children={<BsPerson />} /> */}
          <Input type="text" name="name" placeholder="name*" sx={inputStyle} />
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        {/* <FormLabel sx={formLabelStyle}>email</FormLabel> */}
        <InputGroup>
          {/* <InputLeftElement children={<MdOutlineEmail />} /> */}
          <Input
            type="email"
            name="email"
            placeholder="email *"
            sx={inputStyle}
          />
        </InputGroup>
      </FormControl>
      <FormControl>
        {/* <FormLabel sx={formLabelStyle}>company</FormLabel> */}
        <InputGroup>
          {/* <InputLeftElement children={<HiOutlineOfficeBuilding />} /> */}
          <Input
            type="text"
            name="company"
            placeholder="company"
            sx={inputStyle}
          />
        </InputGroup>
      </FormControl>

      <FormControl isRequired mt={16}>
        <FormLabel sx={formLabelStyle}>message</FormLabel>
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
