import React from "react";
import ContactMe from "../views/ContactMe";
import { Box } from "@chakra-ui/react";

const auxContactMe = () => {
  return (
    <>
      <Box bg="blue" w="100" h="100vh"></Box>
      <ContactMe />
      <Box bg="blue" w="100" h="100vh"></Box>
    </>
  );
};

export default auxContactMe;
