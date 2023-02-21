import React from "react";
import { Routes, Route, } from "react-router-dom";
import App from "../App";
import MainPage from "../Pages/main";
import HomeScreen from "../Pages/HomeScreen";
const Routing = () => {
  return (
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/Home" element={<HomeScreen />} />
        <Route exact path="/MainPage" element={<MainPage />} />
      </Routes>
  );
}
export default Routing