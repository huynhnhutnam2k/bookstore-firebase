import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Form from "./components/Form";
import Login from "./components/Login";
function App() {
  return (
    <div className="App relative">
      <Router>
        <Search />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
