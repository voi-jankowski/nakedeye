import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";
import "./index.css";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#F7FAFC",
      },
    },
  },
  components: {
    Box: {
      baseStyle: {
        borderRadius: "0",
      },
    },
    Container: {
      baseStyle: {
        borderRadius: "0",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
