// src/components/Benefits.tsx
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

const Benefits = () => (
  <Box height="25%" bg="rgba(0, 65, 106, 0.5)" m={0} p={0}>
    <Grid templateColumns="repeat(4, 1fr)" height="100%">
      <GridItem display="flex" justifyContent="center" alignItems="center">
        <Text color="white">Benefit 1</Text>
      </GridItem>
      <GridItem display="flex" justifyContent="center" alignItems="center">
        <Text color="white">Benefit 2</Text>
      </GridItem>
      <GridItem display="flex" justifyContent="center" alignItems="center">
        <Text color="white">Benefit 3</Text>
      </GridItem>
      <GridItem display="flex" justifyContent="center" alignItems="center">
        <Text color="white">Benefit 4</Text>
      </GridItem>
    </Grid>
  </Box>
);

export default Benefits;
