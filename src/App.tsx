import { useState } from "react";
import { Header } from "./components/Header";
import { MainPage } from "./components/MainPage";
import "./App.css";

function App() {
  return (
    <Box bg="offwhite" minH="100vh">
      <Header />
      <MainPage />
    </Box>
  );
}

export default App;
