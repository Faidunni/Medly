import { Box, Flex, Text } from "@chakra-ui/react";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";

function DepartmentContent() {
  return (
    <Box as="section" pt={"100px"}>
      <Text as="h2">Department</Text>
      <Text as="p">
        there is the latest update for the last 7 days, check now
      </Text>
      <Flex gap={5}>
        <Box as="div" bg={"white"} p={5} borderRadius={"lg"} flexBasis="40%">
          <DoughnutChart />
        </Box>
        <Box as="div" bg={"white"} p={5} borderRadius={"lg"} flexBasis="60%">
          <BarChart />
        </Box>
      </Flex>
    </Box>
  );
}

export default DepartmentContent;
