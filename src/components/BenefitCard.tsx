// src/components/BenefitCard.tsx
import {
  Box,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Divider,
} from "@chakra-ui/react";

interface BenefitCardProps {
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description }) => (
  <Card>
    <CardHeader>
      <Heading size="md">{title}</Heading>
    </CardHeader>
    <Divider />
    <CardBody>
      <Box>
        <Heading size="xs" textTransform="uppercase">
          Summary
        </Heading>
        <Text pt="2" fontSize="sm">
          {description}
        </Text>
      </Box>
    </CardBody>
  </Card>
);
export default BenefitCard;
