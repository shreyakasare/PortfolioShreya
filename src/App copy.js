import "./App.css";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";

import "./Components/navbar.css";
import { Contact } from "./Components/Contact";
import { Home } from "./Components/Home";
import CycleThrough from "./Components/CycleThrough";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Blog } from "./Components/Blog";
import Temperature from "./Weather/WeatherApp/Temperature";
import First from "./CSS/First";
const App = () => {
  return (
   
      <div>
        <NavBar />
        <Routes>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="/" element={<Home />} />  */}
          <Route path="/layout" element={<CycleThrough />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="weather" element={<Temperature />} />
          <Route path="cssstudy" element={<First/>}/>
        </Routes>
      </div>
   
  );
};

export default App;


