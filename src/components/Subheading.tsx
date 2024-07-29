// src/components/Subheading.tsx
import { Box, Text } from "@chakra-ui/react";

const Subheading = () => {
  const textStyle = {
    fontSize: {
      base: "2xl",
      sm: "2xl",
      md: "3xl",
      lg: "4xl",
      xl: "4xl",
      "2xl": "4xl",
    },
    fontWeight: "200",
    color: "white",
  };

  return (
    <Box
      textAlign="left"
      p={{ base: 8, sm: 8, md: 10, lg: 12, xl: 12, "2xl": 16 }}
    >
      <Text sx={textStyle}>vfx.</Text>
      <Text sx={textStyle}>marketing.</Text>
      <Text sx={textStyle}>specialists.</Text>
    </Box>
  );
};

export default Subheading;
