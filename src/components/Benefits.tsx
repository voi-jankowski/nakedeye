// src/components/Benefits.tsx
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import BenefitCard from "./BenefitCard";

interface BenefitProps {
  title: string;
  description: string;
}

const benefits: BenefitProps[] = [
  {
    title: "Benefit 1",
    description:
      "This is the first benefit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Benefit 2",
    description:
      "This is the second benefit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Benefit 3",
    description:
      "This is the third benefit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Benefit 4",
    description:
      "This is the fourth benefit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Benefits = () => (
  <Box height="100%" bg="rgba(0, 65, 106, 0.4)">
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={6}
      p={4}
      justifyContent="space-around"
    >
      {benefits.map((benefit) => (
        <BenefitCard title={benefit.title} description={benefit.description} />
      ))}
    </Grid>
  </Box>
);

export default Benefits;
