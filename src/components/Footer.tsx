// src/components/Footer.tsx
import { Box, HStack, IconButton } from "@chakra-ui/react";
import { BsInstagram, BsTiktok } from "react-icons/bs";

const Footer = () => {
  return (
    <Box as="footer" mt={10} py={4} bg="ofwhite" color="indigo">
      <HStack justify="center" spacing={6}>
        <IconButton
          as="a"
          href="https://www.instagram.com/nakedeye_creative?igsh=YnBzOGVqc3pobDcy&utm_source=qr"
          aria-label="instagram"
          variant="ghost"
          size="lg"
          fontSize="4xl"
          icon={<BsInstagram />}
          _hover={{ transform: "scale(1.2)" }}
          color="black"
        />
        <IconButton
          as="a"
          href="https://www.tiktok.com/@naked.eye.creative?_t=8ofHYujCoK1&_r=1"
          aria-label="tiktok"
          variant="ghost"
          size="lg"
          fontSize="4xl"
          icon={<BsTiktok />}
          _hover={{ transform: "scale(1.2)" }}
          color="black"
        />
        {/* <IconButton
          as="a"
          href="https://www.linkedin.com/in/grant-nelson-b4461631b/"
          aria-label="linkedin"
          variant="ghost"
          size="lg"
          fontSize="4xl"
          icon={<BsLinkedin />}
          _hover={{ transform: "scale(1.2)" }}
          color="black"
        /> */}
      </HStack>
    </Box>
  );
};

export default Footer;
