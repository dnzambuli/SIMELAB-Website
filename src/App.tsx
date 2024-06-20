import React from "react";
import "../src/index.css";
import Banner from "./components/Banner";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CustomNavbar from "./components/Navbar";
import Projects from "./pages/Projects";

const App: React.FC = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/publications" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
