import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";
import "./index.css";

const theme = extendTheme({
  colors: {
    offwhite: "#F5F5F5",
    indigo: "#00416A",
  },
  styles: {
    global: {
      body: {
        bg: "offwhite",
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
