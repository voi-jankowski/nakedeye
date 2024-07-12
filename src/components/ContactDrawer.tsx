// src/components/ContactDrawer.tsx
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import ContactForm from "./ContactForm";

const ContactDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLParagraphElement>(null);

  return (
    <>
      <Text
        ref={btnRef as React.RefObject<HTMLParagraphElement>}
        onClick={onOpen}
        cursor="pointer"
        fontWeight={"bold"}
        fontSize={"md"}
        bg="rgba(245, 245, 245, 0.4)"
        p={2}
      >
        Contact Us
      </Text>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Get in Touch</DrawerHeader>
          <DrawerBody>
            <ContactForm />
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ContactDrawer;
