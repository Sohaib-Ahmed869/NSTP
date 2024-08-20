import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/navbar";
import Home from "./Home/page";
import TenancyForm from "./TenancyForm/page";
import About from "./About/page";
import Contact from "./Contact/page";
import Innovate from "./Innovate/innovate";
import Partnerships from "./Partnerships/partnerships";
import Events from "./Events/page";
import Sectors from "./Sectors/page";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tenancy" element={<TenancyForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/innovate" element={<Innovate />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sectors" element={<Sectors />} />
      </Routes>
    </div>
  );
};

export default Layout;
