// src/components/Header.tsx
import {
  Flex,
  HStack,
  Text,
  Image,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="header"
      position="fixed"
      h={{ base: 16, sm: 20, md: 28, lg: 32, xl: 32, "2xl": 52 }}
      top="0"
      left="0"
      width="100%"
      bg="black"
      p={{ base: 6, sm: 6, md: 8, lg: 10, xl: 10, "2xl": 16 }}
      zIndex={2}
      justifyContent="space-between"
      alignItems="center"
      borderBottom={"2px solid yellow"}
    >
      <Image
        src="public/assets/NakedEyeCreative_Logo_White.png"
        alt="Logo"
        width={{
          base: 60,
          sm: 72,
          md: 96,
          lg: "28rem",
          xl: "28rem",
          "2xl": "30rem",
        }}
        pt={{ base: 10, sm: 12, md: 20, lg: 20, xl: 20, "2xl": 4 }}
      />
      <HStack
        spacing={8}
        display={{ base: "none", md: "flex" }}
        color="black"
        fontWeight={"bold"}
        fontSize={"lg"}
      >
        <Link to="benefits" smooth={true} duration={500}>
          <Text cursor="pointer" bgColor={"white"} px={2}>
            benefits.
          </Text>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <Text cursor="pointer" bgColor={"white"} px={2}>
            projects.
          </Text>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <Text cursor="pointer" bgColor={"yellow"} ml={-3} px={2}>
            contact.
          </Text>
        </Link>
      </HStack>
      <IconButton
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        fontSize={"2xl"}
        color="white"
        bg="transparent"
        _hover={{ color: "yellow" }}
      />
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent bg="black">
            <DrawerCloseButton color="white" />
            <DrawerHeader borderBottomWidth="1px" fontSize="2xl" color="yellow">
              menu
            </DrawerHeader>
            <DrawerBody my={14}>
              <VStack
                spacing={8}
                color="white"
                fontWeight={"bold"}
                fontSize={"3xl"}
              >
                <Link
                  to="benefits"
                  smooth={true}
                  duration={500}
                  onClick={onClose}
                >
                  <Text cursor="pointer">benefits.</Text>
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  onClick={onClose}
                >
                  <Text cursor="pointer">projects.</Text>
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={onClose}
                >
                  <Text cursor="pointer">contact.</Text>
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
};

export default Header;
