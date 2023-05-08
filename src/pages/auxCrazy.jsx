import React from "react";
import Crazy from "../views/Crazy";
import { Box } from "@chakra-ui/react";

const auxCrazy = () => {
  return (
    <>
      <Box bg="blue" w="100" h="100vh"></Box>
      <Crazy />
      <Box bg="blue" w="100" h="100vh"></Box>
    </>
  );
};

export default auxCrazy;
