import { Box, Container } from "@chakra-ui/react";
import Dashboard from "./sections/Dashboard";
import Header from "./sections/Navbar/Header";

function App() {
  return (
    <Box bg="#f1f5f9" overflow={"none"}>
      <Header />
      <Dashboard className={"mb - 4"} />
    </Box>
  );
}

export default App;
