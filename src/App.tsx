import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Box bg="offwhite" minH="100vh">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
