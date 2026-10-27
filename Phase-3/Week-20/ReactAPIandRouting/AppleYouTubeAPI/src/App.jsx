import { useState } from "react";

import "./App.css";
import Home from "./pages/Home/Home";
import {Routes, Route }  from 'react-router'
import Mac from "./pages/Mac/Mac";
import Iphone from "./pages/Iphone/Iphone";
import Ipad from "./pages/Ipad/Ipad";
import NotFound from "./pages/NotFound/NotFound";
import SharedLayout from "./components/SharedLayout/SharedLayout";

import "bootstrap/dist/css/bootstrap.min.css";
import ProductPage from "./components/ProductPage/ProductPage";
function App() {
  return (
    <>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />

          <Route path="/iphone/:productID" element={<ProductPage/>} />
          
          <Route path="/ipad" element={<Ipad />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
