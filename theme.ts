import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body, #root, main": {
        height: "100%",
        width: "100%",
        bg: "#f1f2f3",
      },
    },
  },
  colors: {
    primary: "#025940",
  },
  // fonts: {
  //   primary: "Montserrat",
  //   secondary: 'Merriweather Sans'
  // },
});

export default theme;
