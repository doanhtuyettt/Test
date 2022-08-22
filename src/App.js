import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login"
import Home from "./Home"
import SignUp from "./SignUp"
import {AuthProvider} from "../components/AuthProvider"

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;