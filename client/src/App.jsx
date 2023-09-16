import "./App.css";
import { ReactDOM } from "react";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Registeration from "./Pages/Registeration/Registeration";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <BrowserRouter >
        <Routes >
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registeration />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
