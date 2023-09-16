import "./App.css";
import { ReactDOM, useEffect, useState, useContext } from "react";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Registeration from "./Pages/Registeration/Registeration";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { UserContext } from "./context/userContext";
import axios from "axios";

function App() {
  const [user, setUser] = useState()
  useEffect(() => {
    axios.get("http://localhost:5000/user/loaduser", { withCredentials: true })
      .then(({ data }) => {
        if(data.success)
          setUser(data.user)
      })
  },[])
  return (
    <UserContext.Provider value={{user,setUser}}>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registeration />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
