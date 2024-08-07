// src/components/Header.tsx
import {
  Flex,
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
      position="absolute"
      h={{ base: 28, sm: 32, md: 40, lg: 48, xl: 48, "2xl": 52 }}
      top="0"
      left="0"
      width="100%"
      bg="transparent"
      p={{ base: 6, sm: 6, md: 8, lg: 10, xl: 10, "2xl": 16 }}
      zIndex={2}
      justifyContent="space-between"
      alignItems="center"
      // borderBottom={"2px solid yellow"}
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
        pt={{ base: 4, sm: 4, md: 5, lg: 6, xl: 6, "2xl": 4 }}
      />
      <VStack
        spacing={3}
        display={{ base: "none", md: "flex" }}
        color="black"
        fontWeight={"bold"}
        fontSize={"lg"}
        alignItems="flex-end"
      >
        {/* <Link to="benefits" smooth={true} duration={500}>
          <Text cursor="pointer" bgColor={"white"} px={2}>
            benefits.
          </Text>
        </Link> */}
        <Link to="projects" smooth={true} duration={500}>
          <Text cursor="pointer" bgColor={"white"} px={2}>
            projects.
          </Text>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <Text cursor="pointer" bgColor={"yellow"} px={2}>
            contact.
          </Text>
        </Link>
      </VStack>
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
          <DrawerContent bg="offwhite">
            <DrawerCloseButton color="black" />
            <DrawerHeader borderBottomWidth="1px" fontSize="2xl" color="black">
              <Text
                as="span"
                fontSize="inherit"
                fontWeight="700"
                bgColor={"yellow"}
                py={2}
                px={4}
              >
                menu
              </Text>
            </DrawerHeader>
            <DrawerBody my={14}>
              <VStack
                spacing={8}
                color="black"
                fontWeight={"bold"}
                fontSize={"3xl"}
              >
                {/* <Link
                  to="benefits"
                  smooth={true}
                  duration={500}
                  onClick={onClose}
                >
                  <Text cursor="pointer">benefits.</Text>
                </Link> */}
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
