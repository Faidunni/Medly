import { Box, Flex, Text } from "@chakra-ui/react";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import { IoHome } from "react-icons/io5";
import { FaHospitalUser } from "react-icons/fa";

function DepartmentContent() {
  return (
    <Box
      as="section"
      pt={"100px"}
      px={{ base: "20px", md: "10px", lg: "60px" }}
    >
      <Text as="h1" fontSize={"2xl"} fontWeight={"bold"} color={"black"}>
        Department
      </Text>
      <Text as="p" color={"#ABABAB"}>
        there is the latest update for the last 7 days, check now
      </Text>
      <Flex gap={5} mt={6} direction={{ base: "column", md: "row" }}>
        <Box
          as="div"
          bg={"white"}
          p={5}
          borderRadius={"lg"}
          w={{ base: "40%", md: "100%", sm: "100%" }}
        >
          <Flex alignItems={"center"} gap={2}>
            <Box as="div" bg={"white"} p={2} borderRadius={"lg"} shadow={"md"}>
              <IoHome style={{ color: "#1A4FBA" }} />
            </Box>
            <Text as="h3" fontWeight={"semibold"} color={"#6E7191"}>
              TotalDepartment
            </Text>
          </Flex>
          <DoughnutChart />
        </Box>
        <Box
          as="div"
          bg={"white"}
          px={5}
          py={5}
          borderRadius={"lg"}
          w={{ base: "60%", md: "100%", sm: "100%" }}
        >
          <Flex alignItems={"center"} gap={2} pb={5}>
            <Box as="div" bg={"white"} p={2} borderRadius={"lg"} shadow={"md"}>
              <FaHospitalUser style={{ color: "#1A4FBA" }} />
            </Box>
            <Text as="h3" fontWeight={"semibold"} color={"#6E7191"}>
              Employees
            </Text>
          </Flex>
          <BarChart />
        </Box>
      </Flex>
    </Box>
  );
}

export default DepartmentContent;
