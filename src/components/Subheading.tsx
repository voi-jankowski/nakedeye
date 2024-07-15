// src/components/Subheading.tsx
import { Box, Text } from "@chakra-ui/react";

const Subheading = () => {
  const textStyle = {
    fontSize: {
      base: "3xl",
      sm: "3xl",
      md: "4xl",
      lg: "5xl",
      xl: "5xl",
      "2xl": "6xl",
    },
    fontWeight: "900",
    color: "blue",
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
