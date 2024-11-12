import { Flex, Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import logo from "../../assets/images/logo.png";
import { IconButton } from "@chakra-ui/react";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import Demo from "./Mobile";

function Header() {
  const [scrolling, setScrolling] = useState(false);

  // Detect scroll and change the header color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Dashboard", href: "#" },
    { name: "Patients", href: "#" },
    { name: "Department", href: "#" },
  ];

  const logoWidth = useBreakpointValue({ base: "40px", md: "50px" });

  return (
    <Box
      as="header"
      py="10px"
      px={{ base: "4", sm: "1", md: "8", lg: "12", xl: "16" }}
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      borderBottom="1px solid"
      borderColor="gray.200"
      bg={scrolling ? "#1A4FBA" : ""}
      color={scrolling ? "white" : "black"}
      transition="background-color 0.3s ease"
    >
      <Flex justifyContent="space-between" alignContent={"center"}>
        <HStack>
          <img src={logo} alt="logo" width={logoWidth} />
          <Text fontSize="2xl" fontWeight="bold" as="h1">
            Medly
          </Text>
        </HStack>
        <HStack
          as="ul"
          spacing={8}
          listStyleType="none"
          display={{ base: "none", md: "flex" }}
        >
          {navLinks.map((link) => (
            <Box
              as="li"
              key={link.name}
              _hover={{
                bg: "blue.800",
                color: "white",
                fontWeight: "semibold",
              }}
              p={2}
              borderRadius="md"
            >
              <a href={link.href}>{link.name}</a>
            </Box>
          ))}
        </HStack>
        <HStack spacing={4}>
          {/* Notification Icon */}
          <IconButton aria-label="Notifications" variant="ghost" size="lg">
            <IoNotificationsOutline />
          </IconButton>
          <Demo />
        </HStack>
      </Flex>
    </Box>
  );
}

export default Header;
