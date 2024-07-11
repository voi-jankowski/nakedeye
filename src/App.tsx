import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <Box bg="offwhite" minH="100vh">
      <Header />
      <Home />
    </Box>
  );
}

export default App;
