import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import ChakraNextImage from "./ChakraNextImage";
import NavbarLinkScroll from "./NavbarLinkScroll";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

// z-index: 999;
// background-color: white;

const Navbar = () => {
  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
  const [hidden, setHidden] = useState(!isOpen);

  return (
    <Flex
      bg="transparent"
      w="100%"
      minH="100px"
      align="center"
      justify="space-between"
      px={{ base: "6", lg: "16" }}
      position="fixed"
      zIndex="999"
    >
      <ChakraNextImage src="/images/logo.png" alt="logo" w="34px" h="46px" />
      <Flex gap="14" display={{ base: "none", lg: "flex" }}>
        <NavbarLinkScroll path="career" text="About" size="3xl" />
        <NavbarLinkScroll path="projects" text="Projects" size="3xl" />
        <NavbarLinkScroll path="contact" text="Contact" size="3xl" />
      </Flex>

      {/* NAVBAR MOBILE */}
      <Button
        {...getButtonProps()}
        px="3"
        bg="none"
        _hover={{ bg: "none" }}
        _active={{ border: "none" }}
        aria-label="open menu"
        display={{ base: "block", lg: "none" }}
        position={isOpen ? "fixed" : "absolute"}
        right="2"
        top="8"
        zIndex="300"
        color="black"
        as={motion.button}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
      >
        {!isOpen ? (
          <HamburgerIcon w="40px" h="40px" />
        ) : (
          <CloseIcon w="30px" h="30px" />
        )}
      </Button>
      <Flex
        as={motion.div}
        {...getDisclosureProps()}
        hidden={hidden}
        initial={false}
        onAnimationStart={() => setHidden(false)}
        onAnimationComplete={() => setHidden(false)}
        animate={{ width: isOpen ? "100vw" : "0" }}
        display={{ md: "none" }}
        flexDirection="column"
        bg="#b78dea"
        overflow="hidden"
        position={isOpen ? "fixed" : "absolute"}
        right="0"
        top="0"
        height="100vh"
        zIndex="200"
      >
        <Flex flexDir="column" h="100%" w="100%" pb="20" pt="32">
          <Flex align="center" flexDir="column" h="100%" w="100%" gap="10">
            <NavbarLinkScroll path="about" text="About" size="5xl" />
            <NavbarLinkScroll path="proyects" text="Proyects" size="5xl" />
            <NavbarLinkScroll path="contact" text="Contact" size="5xl" />
          </Flex>
          <Flex align="end" justify="center" w="100%">
            <ChakraNextImage
              src="/images/logo.png"
              alt="logo"
              w="34px"
              h="46px"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
