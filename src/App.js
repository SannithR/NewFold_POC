// App.js
import React from "react";
import './styleguide.css';
import './styleguide1.css';
import { Routes, Route } from "react-router-dom";
import Login from "./LoginComponent/LoginComponent";
import Home from "./HomeComponent/HomeComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
