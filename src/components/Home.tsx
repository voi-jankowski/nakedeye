// src/components/Home.tsx
import { Box, Container, VStack } from "@chakra-ui/react";
import Subheading from "./Subheading";
import Projects from "./Projects";
import CallToAction from "./CallToAction";
import WhatWeDo from "./WhatWeDo";
import Benefits from "./Benefits";

const Home = () => (
  <Container maxW="container.2xl" bg="offwhite" p={0}>
    <VStack spacing={0} mt={0} boxShadow="xl" position="relative" bg="black">
      <Box
        as="video"
        autoPlay
        loop
        muted
        playsInline
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        objectFit="cover"
        opacity={0.7}
        // boxShadow="xl"
      >
        <source src="public/assets/videos/website_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
      <Box
        height={{ base: "50vh", md: "65vh" }}
        width="100%"
        pt={{ base: 20, sm: 24, md: 36 }}
        m={0}
        zIndex={1}
      >
        <Subheading />
      </Box>
    </VStack>
    <Box width="100%" p={0} mx={10}>
      <WhatWeDo />
    </Box>
    {/* <Box id="projects" bg="offwhite" my={24}>
      <Projects />
    </Box> */}
    <Box
      id="contact"
      bg="offwhite"
      my={{ base: 8, sm: 12, md: 14, lg: 20, xl: 24, "2xl": 32 }}
    >
      <CallToAction />
    </Box>
  </Container>
);

export default Home;
