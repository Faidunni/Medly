import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <Box
      bgGradient="to-r"
      gradientFrom="#1A4FBA"
      gradientTo="#71DDB1"
      color="white"
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      backgroundPosition={"cover"}
      h={"100vh"}
      justifyContent={"center"}
      gap={4}
    >
      <Box as="div" bg={"white"} borderRadius={"2xl"}>
        <Image src={logo} w={"150px"} />
      </Box>

      <Text as="h1" fontWeight={"bold"} fontSize={"4xl"}>
        Medly
      </Text>

      <Text
        as="p"
        fontSize={"lg"}
        lineHeight={"30px"}
        textAlign={"center"}
        px={4}
      >
        Welcome to Medly, your gateway to seamless healthcare management. <br />{" "}
        Explore our platform and simplify your health journey today.
      </Text>
      <Link to="/mainpage">
        <Button
          bg="#1A4FBA"
          px={20}
          py={6}
          mt={6}
          fontWeight={"semibold"}
          fontSize={"lg"}
          _hover={{ bg: "#16439A" }}
        >
          Get Started
        </Button>
      </Link>
    </Box>
  );
}

export default HomePage;
