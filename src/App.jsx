import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/landingPage.jsx";
import GlobalStyle from "./styles/global.js";
import { Header } from "./components/Header/header.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default App;
