import React from "react";
import Men from "pages/Men";
import Selection from "pages/Selection";
import Exploring from "pages/Exploring";
import Homepage from "pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/exploring" element={<Exploring />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/men" element={<Men />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
