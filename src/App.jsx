import React from "react";

import "./App.css";
import Main from "./main2";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

import Team from "./pages/team";
import Pages from "./pages/pages";
import Partner from "./pages/partner";
import Shop from "./pages/shop";

function App() {
  return (
    <div className=" one text-white">

      <Routes>
        <Route path="/" element ={<Main/>}/>
        <Route path="/home" element={<Home />} />
      
        <Route path="/team" element={<Team />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
