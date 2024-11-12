import {
  Box,
  GridItem,
  VStack,
  Text,
  Span,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { FaEllipsisH } from "react-icons/fa";
import childbirth from "../assets/images/childbirth.png";
import { FaBell } from "react-icons/fa";

import feet from "../assets/images/feet.svg";
import avatar from "../assets/images/Avatar.svg";
import drop from "../assets/images/drop.svg";
import flame from "../assets/images/flame.svg";

import { Image } from "@chakra-ui/react";
import BarChart from "./BarChart";

function Dashboard() {
  return (
    <Box pt="80px" px={{ base: "4", sm: "1", md: "8", lg: "12", xl: "16" }}>
      <Text as="h1" fontSize={"2xl"} px={"15px"} color={"black"}>
        Dashboard Overview
      </Text>
      <Grid
        templateRows="repeat(5, auto)"
        templateColumns={{
          base: "repeat(2, 1fr)", // for very small screens (e.g., mobile)
          sm: "repeat(4, 1fr)", // for small screens (e.g., larger mobile devices)
          md: "repeat(6, 1fr)", // for medium screens (e.g., tablets)
          lg: "repeat(8, 1fr)", // for large screens (default)
        }}
        gap={4}
        p={4}
      >
        {/* Hero Card */}
        <GridItem
          colSpan={{ base: 2, sm: 3, md: 4, lg: 6 }}
          borderRadius="lg"
          bgGradient="to-r"
          gradientFrom="#1A4FBA"
          gradientTo="#71DDB1"
          color="#D4E3F0"
          px={{ base: "4", md: "8" }}
          py={{ base: "4", md: "0" }}
          fontWeight={400}
          width={"100%"}
        >
          <Flex
            justifyContent="space-between"
            alignContent={"center"}
            direction={{ base: "column", md: "row" }}
            gap={5}
          >
            <VStack align="start" justify="center" width="100%">
              <Text fontSize="2xl">
                Hello{" "}
                <Text as={Span} fontSize="2xl" color={"white"}>
                  Tassy Omah,
                </Text>
              </Text>
              <Text as="p">
                Have a nice day and don’t forget to take care of your health!
              </Text>
              <Text as={"a"} color="teal.300" href="#">
                Learn more &rarr;
              </Text>
            </VStack>

            <Image src={childbirth} width={"300px"} />
          </Flex>
        </GridItem>
        <GridItem
          bg="white"
          p={4}
          borderRadius="lg"
          colSpan={{
            base: 2,
            sm: 3,
            md: 4,
            lg: 2,
          }}
          rowSpan={{
            base: 1,
            sm: 2,
            md: 2,
            lg: 3,
          }}
        >
          <Flex
            bg="#f1f5f9"
            borderRadius={"lg"}
            direction={"column"}
            alignItems={"center"}
            py={4}
          >
            <Box bg="#E0E7FF" as="div" rounded={"full"}>
              <Image src={avatar} width={"50px"} />
            </Box>

            <Text
              as="h2"
              fontSize="2xl"
              color="#1A4FBA"
              fontWeight={"300"}
              fontStyle={"italic"}
            >
              Tassy Omah
            </Text>
            <Box display={"flex"}>
              <Text as="p" color={"#A3AED0"} fontSize={"sm"}>
                25 years old
              </Text>
              <Text as="p" color={"#A3AED0"} ml={2} fontSize={"sm"}>
                | New York City
              </Text>
            </Box>
            <Box display={"flex"} gap={6} mt={8}>
              <Box
                as="div"
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Text as="p" color={"#85A5C2"} fontWeight={"400"}>
                  Blood
                </Text>
                <Text as="p" color={"#85A5C2"} fontWeight={"bold"}>
                  O+
                </Text>
              </Box>
              <Box
                as="div"
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Text as="p" color={"#85A5C2"} fontWeight={"400"}>
                  Height
                </Text>
                <Text as="p" color={"#85A5C2"} fontWeight={"bold"}>
                  186cm
                </Text>
              </Box>
              <Box
                as="div"
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Text as="p" color={"#85A5C2"} fontWeight={"400"}>
                  Weight
                </Text>
                <Text as="p" color={"#85A5C2"} fontWeight={"bold"}>
                  90kg
                </Text>
              </Box>
            </Box>
          </Flex>
          <VStack
            mt={"40px"}
            borderTopWidth="2px"
            borderTopColor="#D4E3F0"
            align={"start"}
          >
            <Text
              as="h3"
              color={"#59748A"}
              fontWeight={"semibold"}
              mt={4}
              fontSize={"xl"}
            >
              Upcoming
            </Text>
            <Box display={"flex"} gap={4} alignItems="center" mt={4}>
              <Box bg="#71DDB1" as="div" p={4} rounded={"full"} mt={4}>
                <FaBell color="white" size="1em" />
              </Box>
              <Box alignItems="center" justifyContent="center">
                <Text as="p" color={"#858585"} fontWeight={"500"}>
                  Health appointment
                </Text>
                <Text as="p" color={"#858585"} fontWeight={"500"}>
                  Mr Dok tomm
                </Text>
                <Text as="p" color={"#9E9E9E"} fontWeight={"300"}>
                  09:20AM - 11:30
                </Text>
              </Box>
            </Box>
          </VStack>
        </GridItem>
        {/* User Info Sidebar */}
        <GridItem
          bg="white"
          px={8}
          py={4}
          borderRadius="lg"
          colSpan={{
            base: 2,
            sm: 3,
            md: 4,
            lg: 2,
          }}
        >
          <Flex gap={4} alignItems={"center"}>
            <Box bg="#1A4FBA" as="div" p={2} rounded={"full"}>
              <Image src={feet} width={"30px"} />
            </Box>
            <Box>
              <Text as="p" color={"#ABABAB"}>
                <Text
                  as="span"
                  color="#6E7191"
                  fontWeight={"semibold"}
                  fontSize={"2xl"}
                >
                  202
                </Text>
                /3000
              </Text>
              <Text as="p" color="#6E7191">
                Steps taken
              </Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem
          colSpan={{
            base: 2,
            sm: 3,
            md: 4,
            lg: 2,
          }}
          bg="white"
          px={8}
          py={4}
          borderRadius="lg"
        >
          <Flex gap={4} alignItems={"center"}>
            <Box bg="#71DDB1" as="div" p={2} rounded={"full"}>
              <Image src={flame} width={"30px"} />
            </Box>
            <Box>
              <Text as="p" color={"#ABABAB"}>
                <Text
                  as="span"
                  color="#6E7191"
                  fontWeight={"semibold"}
                  fontSize={"2xl"}
                  marginRight={1}
                >
                  408
                </Text>
                kcal
              </Text>
              <Text as="p" color="#6E7191">
                Calories burned
              </Text>
            </Box>
          </Flex>
        </GridItem>

        {/* Metrics Cards */}
        <GridItem
          colSpan={{
            base: 2,
            sm: 3,
            md: 4,
            lg: 2,
          }}
          bg="white"
          px={8}
          py={4}
          borderRadius="lg"
        >
          <Flex gap={4} alignItems={"center"}>
            <Box bg="#3FBDF1" as="div" p={2} rounded={"full"}>
              <Image src={drop} width={"30px"} />
            </Box>
            <Box>
              <Text as="p" color={"#ABABAB"}>
                <Text
                  as="span"
                  color="#6E7191"
                  fontWeight={"semibold"}
                  fontSize={"2xl"}
                  marginRight={1}
                >
                  87
                </Text>
                litres
              </Text>
              <Text as="p" color="#6E7191">
                Water taken
              </Text>
            </Box>
          </Flex>
        </GridItem>

        {/* chart */}
        <GridItem
          colSpan={{
            base: 2,
            sm: 3,
            md: 4,
            lg: 4,
          }}
          bg="white"
          p={4}
          borderRadius="lg"
        >
          <Flex justify="flex-end" gap={4}>
            <FaEllipsisH color="#6E7191" />
          </Flex>
          <BarChart />
        </GridItem>

        {/* circular */}
        <GridItem
          colSpan={{
            base: 2,
            sm: 3,
            md: 3,
            lg: 2,
          }}
          bg="white"
          p={4}
          borderRadius="lg"
          boxShadow="md"
          border="1px"
          borderColor="blue.200"
        >
          {/* Header with ellipsis */}
          <Flex justify="flex-end" gap={4}>
            <FaEllipsisH color="#6E7191" />
          </Flex>

          {/* Custom Progress Circle */}
          <VStack spacing={4} align="center">
            <Box
              as="div"
              p={"60px"}
              borderRightWidth={10}
              borderRightColor={"#1A4FBA"}
              borderLeftWidth={10}
              borderTopWidth={10}
              borderBottomWidth={10}
              rounded={"full"}
              textAlign={"center"}
            >
              <Text fontSize="2xl" fontWeight="bold" color="#6E7191">
                12%
              </Text>
              <Text fontSize="sm" color="#ABABAB">
                Increment
              </Text>
            </Box>

            {/* Content below the progress circle */}
            <VStack spacing={1}>
              <Text fontSize="xl" fontWeight="bold" color="#6E7191">
                Hours of sleep
              </Text>
              <Text fontSize="sm" color="#ABABAB">
                3:30 mins yesterday
              </Text>
            </VStack>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Dashboard;
