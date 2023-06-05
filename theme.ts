import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body, #root, main": {
        height: "100%",
        width: "100%",
        bg: "#f1f2f3",
        fontFamily: "Gemunu Libre, sans-serif", // Set the default font
      },
    },
  },
  colors: {
    primary: "#8F00FF",
  },
});

export default theme;
