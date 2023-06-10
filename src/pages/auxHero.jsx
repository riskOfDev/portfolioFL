import React from "react";
import Hero from "../views/Hero";
import { Box } from "@chakra-ui/react";

const auxHero = () => {
  return (
    <>
      <Hero />
      <Box bg="blue" w="100" h="100vh"></Box>
    </>
  );
};

export default auxHero;
