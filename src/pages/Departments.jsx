import Header from "../sections/Navbar/Header";
import { Box } from "@chakra-ui/react";
import DepartmentContent from "../sections/Department/DepartmentContent";

function Departments() {
  return (
    <Box bg="#f1f5f9" overflow={"none"}>
      <Header />
      <DepartmentContent />
    </Box>
  );
}

export default Departments;
