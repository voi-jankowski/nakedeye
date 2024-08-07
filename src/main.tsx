import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import GlobalStyles from "./components/GlobalStyles";

import App from "./App";
import "./index.css";

const theme = extendTheme({
  colors: {
    offwhite: "#F5F5F5",
    indigo: "#00416A",
    blue: "#021858",
    yellow: "#EFC621",
  },
  fonts: {
    heading: "'Urbanist', sans-serif",
    body: "'Urbanist', sans-serif",
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
    Input: {
      baseStyle: {
        field: {
          borderRadius: "0",
          border: "none",
          borderBottom: "1px solid",
        },
      },
      defaultProps: {
        focusBorderColor: "transparent",
      },
    },
    Textarea: {
      baseStyle: {
        rounded: "0",
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "0",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
