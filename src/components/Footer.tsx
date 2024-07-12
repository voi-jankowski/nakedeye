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
    <Box as="footer" py={4} bg="#F5F5F5" color="indigo">
      <HStack justify="center" spacing={4}>
        <Tooltip
          label={hasCopied ? "Email Copied!" : "Copy Email"}
          closeOnClick={false}
          hasArrow
        >
          <IconButton
            aria-label="email"
            variant="ghost"
            size="lg"
            fontSize="2xl"
            icon={<MdEmail />}
            _hover={{ bg: "rgba(0, 65, 106, 0.1)" }}
            onClick={onCopy}
            color="indigo"
          />
        </Tooltip>
        <IconButton
          as="a"
          href="#"
          aria-label="twitter"
          variant="ghost"
          size="lg"
          fontSize="2xl"
          icon={<BsTwitter />}
          _hover={{ bg: "rgba(0, 65, 106, 0.1)" }}
          color="indigo"
        />
        <IconButton
          as="a"
          href="#"
          aria-label="linkedin"
          variant="ghost"
          size="lg"
          fontSize="2xl"
          icon={<BsLinkedin />}
          _hover={{ bg: "rgba(0, 65, 106, 0.1)" }}
          color="indigo"
        />
      </HStack>
    </Box>
  );
};

export default Footer;
