import { Box, Center, Text } from "@chakra-ui/react";

const Phrases = () => {
  return (
    <Center h="100vh">
      <Box textAlign="center">
        <Text fontSize="6xl" fontWeight="bold" mb="8">
          EMPATHIZE
        </Text>
        <Text fontSize="6xl" fontWeight="bold" mb="8">
          IDEATE
        </Text>
        <Text fontSize="6xl" fontWeight="bold" mb="8">
          EXE<span style={{ color: "pink" }}>CUTE</span>
        </Text>
      </Box>
    </Center>
  );
};

export default Phrases;
