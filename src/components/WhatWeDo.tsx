// src/components/WhatWeDo.tsx
import { Box, Text } from "@chakra-ui/react";

const WhatWeDo = () => {
  const textStyle = {
    fontSize: {
      base: "2xl",
      sm: "2xl",
      md: "3xl",
      lg: "4xl",
      xl: "4xl",
      "2xl": "4xl",
    },
    fontWeight: "400",
    color: "black",
  };

  return (
    <Box
      textAlign="right"
      p={{ base: 8, sm: 8, md: 10, lg: 12, xl: 12, "2xl": 16 }}
    >
      <Text sx={textStyle}>
        We craft advanced renders that evoke immersive experiences, pushing the
        limits of reality through interactive content, that captivates{" "}
        <Text
          as="span"
          fontSize="inherit"
          fontWeight="700"
          bgColor={"yellow"}
          py={2}
          px={4}
        >
          attention.
        </Text>
      </Text>
    </Box>
  );
};

export default WhatWeDo;
