import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body, #root, main": {
        height: "100%",
        width: "100%",
        bg: "radial-gradient(circle, rgba(173,0,255,1) 0%, rgba(255,255,255,1) 35%, rgba(214,128,255,1) 100%);",
        fontFamily: "Gemunu Libre, sans-serif", // Set the default font
      },
    },
  },
  colors: {
    primary: "#8F00FF",
  },
});

export default theme;
