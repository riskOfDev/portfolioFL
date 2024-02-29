import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box, Flex, Heading, Link, chakra } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TiltImage from "./TiltImage";
import styles from "../../styles/ProjectDef.module.css";

const MotionBox = chakra(motion.div);

const Project = ({ type, name, thumbnail, links, number, generalLink }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Flex
      ref={ref}
      direction={number % 2 ? "row" : "row-reverse"}
      padding="30px"
      alignItems="center"
    >
      <MotionBox
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.7 } },
        }}
      >
        {generalLink ? (
          <a href={generalLink} target="_blank" rel="noopener noreferrer">
            <TiltImage image={`/thumbnails/${thumbnail}`} />
          </a>
        ) : (
          <TiltImage image={`/thumbnails/${thumbnail}`} />
        )}
      </MotionBox>

      <Box ml={number % 2 ? "30px" : "0px"} mr={number % 2 ? "0px" : "30px"}>
        <MotionBox
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.9 } },
          }}
        >
          <Box className={styles.titles}>
            <Heading as="h1" fontSize="5xl">
              {type}
            </Heading>
            <Heading as="h2" fontSize="5xl" mt={1} color="#9E9E9E">
              {name}
            </Heading>
          </Box>
        </MotionBox>

        <Flex mt={4}>
          {links &&
            Object.keys(links).map((link, index) => (
              <MotionBox
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { delay: 1.1 + index * 0.2 },
                  },
                }}
                key={link}
              >
                <Link
                  href={links[link]}
                  target="_blank"
                  rel="noopener noreferrer"
                  display="flex"
                  alignItems="center"
                  mr={4}
                  _hover={{ color: "blue.500" }}
                  className={styles.linkItem}
                >
                  <Image
                    src={`/icons/${link}.svg`}
                    alt={link}
                    width={30}
                    height={30}
                    className={
                      windowWidth <= 500
                        ? styles.iconImageSmall
                        : styles.linkImage
                    }
                  />
                  <span className={styles.nameLinks}>
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </span>
                </Link>
              </MotionBox>
            ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Project;
