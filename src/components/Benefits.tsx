// src/components/Benefits.tsx
import { Box, Grid } from "@chakra-ui/react";
import BenefitCard from "./BenefitCard";

interface BenefitProps {
  id: number;
  title: string;
  description: string;
}

const benefits: BenefitProps[] = [
  {
    id: 1,
    title: "imagine",
    description:
      "This is the first benefit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "go big",
    description:
      "This is the second benefit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "create",
    description:
      "This is the third benefit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "follow",
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
        <BenefitCard
          key={benefit.id}
          title={benefit.title}
          description={benefit.description}
        />
      ))}
    </Grid>
  </Box>
);

export default Benefits;
