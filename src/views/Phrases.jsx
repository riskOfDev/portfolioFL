import { Box, Center, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../styles/Phrases.module.css";

const Phrases = () => {
  const [isVisible, setIsVisible] = useState([false, false, false]);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible([true, true, true]);
      }
    });
  };

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: "0px",
    initialInView: false,
    skip: false,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => setIsVisible([true, false, false]), 0);
      setTimeout(() => setIsVisible([true, true, false]), 1000);
      setTimeout(() => setIsVisible([true, true, true]), 2000);
    }
  }, [inView]);

  return (
    <Center
      h="100vh"
      style={{
        background:
          "radial-gradient(circle at center center, rgb(237 201 255) 0%, white 46%)",
      }}
    >
      <Box textAlign="center">
        <Text
          fontSize="8xl"
          fontWeight="bold"
          mb="8"
          ref={ref}
          style={{
            opacity: isVisible[0] ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          EM<u>P</u>H<u>A</u>THIZE
        </Text>
        <Text
          fontSize="8xl"
          fontWeight="bold"
          mb="8"
          ref={ref}
          style={{
            opacity: isVisible[1] ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          IDE<u>A</u>TE
        </Text>
        <Text
          fontSize="8xl"
          fontWeight="bold"
          mb="8"
          ref={ref}
          style={{
            opacity: isVisible[2] ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          EXE
          <span className={styles.cute}>CUTE</span>
        </Text>
      </Box>
    </Center>
  );
};

export default Phrases;
