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
    <Flex justifyContent="center" alignItems="center" height="100%">
      {benefits.map((benefit) => (
        <BenefitCard title={benefit.title} description={benefit.description} />
      ))}
    </Flex>
  </Box>
);

export default Benefits;
