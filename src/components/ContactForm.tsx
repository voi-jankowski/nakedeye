// src/components/ContactForm.tsx
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  VStack,
  Textarea,
  useToast,
} from "@chakra-ui/react";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const toast = useToast();

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const autoReplyTemplateId = import.meta.env
      .VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;

    emailjs.sendForm(serviceId!, templateId!, form.current, publicKey!).then(
      () => {
        toast({
          title: "Message sent.",
          description: "Your message is on its way!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        // Send an auto-reply email to the user
        emailjs
          .sendForm(serviceId!, autoReplyTemplateId!, form.current!, publicKey!)
          .then(
            () => {
              console.log("Auto-reply sent successfully.");
            },
            (error) => {
              console.log("Auto-reply failed:", error.text);
            }
          );

        // Reset the form
        form.current?.reset();
      },
      (error) => {
        console.error("Failed to send message:", error.text);
        toast({
          title: "Error.",
          description: `"We encountered an error while sending your message. Please try again later.`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    );
  };

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
    <VStack as="form" ref={form} onSubmit={sendEmail} spacing={5} width="80%">
      <FormControl isRequired>
        <InputGroup>
          <Input
            type="text"
            name="user_name"
            placeholder="name*"
            sx={inputStyle}
          />
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <InputGroup>
          <Input
            type="email"
            name="user_email"
            placeholder="email*"
            sx={inputStyle}
          />
        </InputGroup>
      </FormControl>
      <FormControl>
        <InputGroup>
          <Input
            type="text"
            name="user_company"
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
          placeholder="message*"
        />
      </FormControl>
      <Button
        type="submit"
        variant="solid"
        width="100%"
        colorScheme="blackAlpha"
      >
        Send Message
      </Button>
    </VStack>
  );
};

export default ContactForm;
