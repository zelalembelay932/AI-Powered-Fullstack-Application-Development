import { useState } from "react";

import "./App.css";
import Home from "./pages/Home/Home";
import {Routes, Route }  from 'react-router'
import Mac from "./pages/Mac/Mac";
import Iphone from "./pages/Iphone/Iphone";
import Ipad from "./pages/Ipad/Ipad";
import NotFound from "./pages/NotFound/NotFound";
import SharedLayout from "./components/SharedLayout/SharedLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/ipad" element={<Ipad />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
