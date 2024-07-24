import React from "react";
import "../src/index.css";
import Banner from "./components/Banner";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CustomNavbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Datasets from "./pages/Datasets";
import Code from "./pages/Code";
import Videos from "./pages/Videos";

const App: React.FC = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/datasets" element={<Datasets />} />
        <Route path="/code" element={<Code />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </Router>
  );
};

export default App;
