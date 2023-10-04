import React from "react";
import NavBar from "./Components/Navbar";
import { CoinProvider } from "./context/coin/CoinContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoinPage from "./pages/CoinPage";

const CryptoApp = () => {
  return (
    <Router>
      <CoinProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/coin/:coinId" element={<CoinPage/>}/>
        </Routes>
      </CoinProvider>
    </Router>
  );
};
export default CryptoApp;
