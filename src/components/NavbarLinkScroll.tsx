import { Box, Text, useTheme } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { Link } from "react-scroll";

type Props = {
  path: string;
  text: string;
  size?: string;
};

const NavbarLinkScroll: React.FC<Props> = ({ path, text, size }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        as={Link}
        to={path}
        spy={true}
        smooth={true}
        duration={500}
        cursor="pointer"
      >
        <Text
          fontSize={size}
          fontWeight="bold"
          _hover={{ color: "primary" }}
          transition="0.15s ease"
        >
          {text}
        </Text>
      </Box>
    </>
  );
};

export default NavbarLinkScroll;
