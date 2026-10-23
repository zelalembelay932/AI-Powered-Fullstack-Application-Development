import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Home from "./pages/Home/Home";
import {Routes, Route }  from 'react-router'
import Mac from "./pages/Mac/Mac";
import Iphone from "./pages/Iphone/Iphone";
import Ipad from "./pages/Ipad/Ipad";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mac" element={<Mac />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/ipad" element={<Ipad />} />
      </Routes>
      {/* <Home/> */}

      <Footer />
    </>
  );
}

export default App;
