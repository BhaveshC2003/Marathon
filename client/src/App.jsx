import "./App.css";
import { ReactDOM, useEffect, useState, useContext } from "react";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Registeration from "./Pages/Registeration/Registeration";
import Events from './components/Events/Events'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Announcements from "./Pages/Announcements/Announcements";
import CreateAnnouncementForm from "./Pages/Announcements/CreateAnnouncementForm";
import Location from "./Pages/Location/Location";
import CreateEvents from "./components/Events/CreateEvents";
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
          <Route path='/events' element={<Events />} />
          <Route path='/announcements' element={<Announcements />} />
          <Route path='/announcements/createAnnouncement' element={<CreateAnnouncementForm />} />
          <Route path='/location' element={<Location />} />
          <Route path='/events/createEvent' element={<CreateEvents />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
