import React, { useState, useContext } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { default as Logo } from './RC_Juhu_logo.png'
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const headerColor = useHeaderColor()
  const navigate = useNavigate()
  const {user,setUser} = useContext(UserContext)
  const handleLogout = async(e)=>{
    e.preventDefault()
    const {data} = await axios.get("http://localhost:5000/user/logout")
    if(data.success){
      setUser(null)
      navigate("/")
    }

  }
  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <img src={Logo} alt="logo" width={200} />

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <Link to='/'>Home</Link>
            <a href="#ourcause">Our Cause</a>
            <a href="#value">Common FAQs</a>
            <a href="#contact-us">Contact Us</a>

            {
              user ?
                <>
                  <button className="button" onClick={handleLogout}>
                      Logout
                  </button>
                </> :
                <>
                  <button className="button">
                    <Link to='/register'>
                      Register
                    </Link>
                  </button>

                  <Link to='/login'>
                    <button className="button">
                      Login
                    </button>
                  </Link>
                </>
            }
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
