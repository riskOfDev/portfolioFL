import React from "react";
import Banner from "../views/Banner";
import { Box } from "@chakra-ui/react";

const auxCrazy = () => {
  return (
    <>
      <Box bg="blue" w="100" h="100vh"></Box>
      <Banner />
      <Box bg="blue" w="100" h="100vh"></Box>
    </>
  );
};

export default auxCrazy;
