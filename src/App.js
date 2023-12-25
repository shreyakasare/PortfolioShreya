import "./App.css";
import React, { useState } from "react";
import "./Components/navbar.css";
import { Contact } from "./Components/Contact";
import CycleThrough from "./Components/CycleThrough";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Blog } from "./Components/Blog";
import Temperature from "./Weather/WeatherApp/Temperature";
import First from "./CSS/First";
import RootLayout from "./Components/RootLayout";
const App = () => {
  
  const router = createBrowserRouter(createRoutesFromElements(
   
    <Route path='/' element={<RootLayout />} >
     
     <Route path="/layout" element={<CycleThrough />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="weather" element={<Temperature />} />
          <Route path="cssstudy" element={<First/>}/>
    </Route>
  ))
  return (
    <>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App; 