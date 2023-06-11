import React, { useState } from "react";
import Image from "next/image";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import DOMPurify from "isomorphic-dompurify";
import emojis from "./readmos/emojis";
import TiltImage from "./TiltImage";

const Project = ({ type, name, thumbnail, links, number, generalLink }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    setOpen(!open);
  };

  return (
    <Flex
      direction={number % 2 ? "row" : "row-reverse"}
      padding="30px"
      alignItems="center"
    >
      {/* Thumbnail */}

      <a href={generalLink}>
        <TiltImage image={`/thumbnails/${thumbnail}`}></TiltImage>
      </a>

      <Box ml={number % 2 ? "30px" : "0px"} className="textContent">
        {/* Name and type */}
        <Box>
          <Heading as="h1" fontSize="5xl">
            {type}
          </Heading>
          <Heading as="h2" fontSize="5xl" mt={1}>
            {name}
          </Heading>
        </Box>

        {/* Links */}
        <Flex mt={4}>
          {Object.keys(links).map((link, index) => {
            if (link === "github") {
              return (
                <Link
                  key={name}
                  href={links[link]}
                  target="_blank"
                  rel="noopener noreferrer"
                  display="flex"
                  alignItems="center"
                  mr={4}
                  _hover={{ color: "blue.500" }}
                >
                  <Image
                    src="/icons/github.svg"
                    alt="github"
                    width={30}
                    height={30}
                    style={{ marginRight: "8px" }}
                  />
                  Github
                </Link>
              );
            }
            if (link === "demo") {
              return (
                <Link
                  key={name}
                  href={links[link]}
                  target="_blank"
                  rel="noopener noreferrer"
                  display="flex"
                  alignItems="center"
                  mr={4}
                  _hover={{ color: "blue.500" }}
                >
                  <Image
                    src="/icons/web-2.svg"
                    alt="demo"
                    width={30}
                    height={30}
                    style={{ marginRight: "8px" }}
                  />
                  Live
                </Link>
              );
            }
            if (link === "behance") {
              return (
                <Link
                  key={name}
                  href={links[link]}
                  target="_blank"
                  rel="noopener noreferrer"
                  display="flex"
                  alignItems="center"
                  mr={4}
                  _hover={{ color: "blue.500" }}
                >
                  <Image
                    src="/icons/behance.svg"
                    alt="behance"
                    width={30}
                    height={30}
                    style={{ marginRight: "8px" }}
                  />
                  Behance
                </Link>
              );
            }
            if (link === "figma") {
              return (
                <Link
                  key={name}
                  href={links[link]}
                  target="_blank"
                  rel="noopener noreferrer"
                  display="flex"
                  alignItems="center"
                  mr={4}
                  _hover={{ color: "blue.500" }}
                >
                  <Image
                    src="/icons/figma.svg"
                    alt="figma"
                    width={30}
                    height={30}
                    style={{ marginRight: "8px" }}
                  />
                  Figma
                </Link>
              );
            }
            return null; // Return null for other cases
          })}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Project;
