import { Box } from "@chakra-ui/react";
import Header from "../sections/Navbar/Header";
import Dashboard from "../sections/Dashboard";

function MainPage() {
  return (
    <Box bg="#f1f5f9" overflow={"none"}>
      <Header />
      <Dashboard className={"mb - 4"} />
    </Box>
  );
}

export default MainPage;
