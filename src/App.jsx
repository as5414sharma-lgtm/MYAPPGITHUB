import { useState } from "react";
import Home from "./components/Home";
import Aboutus from "./Aboutus";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Conferences from "./Conferences";
import Footer from "./components/Footer";
import Instagram from "./Instagram";
import Productivitycourse from "./components/Productivitycourse";
import Personalbrand from "./components/Personalbrand";
import Personalized from "./components/Personalized";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/Conferences" element={<Conferences />} />
        <Route path="/Courses/Instagram" element={<Instagram />} />
        <Route path="/Courses/productivity" element={<Productivitycourse />} />
        <Route path="/Courses/personal-branding" element={<Personalbrand/>}/>
        <Route path="//Personalized/1hour" element={<Personalized/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
