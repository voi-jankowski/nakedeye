import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";
import "./index.css";

const theme = extendTheme({
  colors: {
    offwhite: "#F5F5F5",
    indigo: "#00416A",
    blue: "#2e5090",
  },
  // styles: {
  //   global: {
  //     body: {
  //       bg: "linear-gradient(rgba(228, 236, 243, 0.75) -1.48%, rgba(245, 247, 253, 0.75) 42.02%, rgba(245, 247, 253, 0) 73.75%)",
  //     },
  //   },
  // },
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
