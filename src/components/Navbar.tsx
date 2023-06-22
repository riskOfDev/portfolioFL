import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import ChakraNextImage from "./ChakraNextImage";
import NavbarLinkScroll from "./NavbarLinkScroll";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const Navbar = () => {
  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();

  const variants = {
    hidden: { opacity: 0 },
    show: (i: any) => ({
      opacity: 1,
      transition: {
        delay: i * 0.4,
      },
    }),
  };

  return (
    <Flex
      bg="linear-gradient(180deg, rgb(196 130 220) 0%, rgb(165 111 173) -13%, rgba(247,231,255,0) 95%)"
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
        {["home", "career", "projects", "contact"].map((path, i) => (
          <motion.div
            key={i}
            variants={variants}
            custom={i}
            initial="hidden"
            animate="show"
          >
            <NavbarLinkScroll
              path={path}
              text={path.charAt(0).toUpperCase() + path.slice(1)}
              size="3xl"
            />
          </motion.div>
        ))}
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
        initial={false}
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
            {["home", "career", "projects", "contact"].map((path, i) => (
              <motion.div
                key={i}
                variants={variants}
                custom={i}
                initial="hidden"
                animate="show"
              >
                <NavbarLinkScroll
                  path={path}
                  text={path.charAt(0).toUpperCase() + path.slice(1)}
                  size="5xl"
                />
              </motion.div>
            ))}
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
