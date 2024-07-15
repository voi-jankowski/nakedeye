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
  <Card background={"transparent"} rounded={0} color={"white"} mx={6}>
    <CardHeader>
      <Heading size="2xl">{title}</Heading>
    </CardHeader>
    <Divider />
    <CardBody>
      <Box>
        <Text pt="2" fontSize="sm">
          {description}
        </Text>
      </Box>
    </CardBody>
  </Card>
);
export default BenefitCard;
