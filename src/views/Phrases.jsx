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
    <div className={styles.wrap}>
      <Center
        h="100vh"
        style={{
          fontFamily: "Inter",
          background:
            "radial-gradient(circle at center, rgba(237, 201, 255, 1) 0%, rgba(237, 201, 255, 0) 41%)",
        }}
      >
        <Box textAlign="center">
          <Text
            fontWeight="bold"
            mb="8"
            ref={ref}
            style={{
              opacity: isVisible[0] ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            EM<u>P</u>ATHIZE
          </Text>
          <Text
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
    </div>
  );
};

export default Phrases;
