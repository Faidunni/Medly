import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import Departments from "./pages/Departments";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/department" element={<Departments />} />
      </Routes>
    </Router>
  );
}

export default App;
