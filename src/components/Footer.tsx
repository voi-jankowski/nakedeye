// src/components/Footer.tsx
import {
  Box,
  HStack,
  IconButton,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const { hasCopied, onCopy } = useClipboard("example@example.com");

  return (
    <Box as="footer" py={4} bg="black" color="indigo">
      <HStack justify="center" spacing={6}>
        <Tooltip
          label={hasCopied ? "Email Copied!" : "Copy Email"}
          closeOnClick={false}
          hasArrow
        >
          <IconButton
            aria-label="email"
            variant="ghost"
            size="lg"
            fontSize="4xl"
            icon={<MdEmail />}
            _hover={{ transform: "scale(1.2)" }}
            onClick={onCopy}
            color="white"
          />
        </Tooltip>
        <IconButton
          as="a"
          href="#"
          aria-label="twitter"
          variant="ghost"
          size="lg"
          fontSize="4xl"
          icon={<BsTwitter />}
          _hover={{ transform: "scale(1.2)" }}
          color="white"
        />
        <IconButton
          as="a"
          href="#"
          aria-label="linkedin"
          variant="ghost"
          size="lg"
          fontSize="4xl"
          icon={<BsLinkedin />}
          _hover={{ transform: "scale(1.2)" }}
          color="white"
        />
      </HStack>
    </Box>
  );
};

export default Footer;
