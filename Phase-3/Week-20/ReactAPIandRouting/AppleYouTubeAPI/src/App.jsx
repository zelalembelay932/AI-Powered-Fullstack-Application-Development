import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Home from "./pages/Home/Home";


function App() {
  return (
    <>
      <Header />
      <Home/>
    
      <Footer />
    </>
  );
}

export default App;
