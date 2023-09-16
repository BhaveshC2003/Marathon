import React from 'react'
import './Announcements.css'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
const Announcements = () => {
  return (
    <>
    <div className='App'>
        <Header />
    </div>
    

    <div style={{marginBottom:"2rem"}}>
        <h1 style={{textAlign:"center", marginTop:"2rem"}}>Announcements</h1>

    <div style={{marginLeft:"2rem", marginTop:"2rem"}}>
    <Link to='/announcements/createannouncement'>
    <button className='button' style={{fontSize:"1.5rem", padding:"0.5rem 1rem 0.5rem 1rem", borderRadius:"1.5rem"}}>
      Create announcement +
    </button>
    </Link>
    </div>

        <div style={{padding:"0rem 20% 2rem 20%"}}>
        <div className='card'>
            <header style={{fontSize:"1.5rem"}}>User says,</header>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
        </div>
        <div className='card'>
            <header style={{fontSize:"1.5rem"}}>User says,</header>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
        </div>
        <div className='card'>
            <header style={{fontSize:"1.5rem"}}>User says,</header>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
        </div>
        </div>
    </div>
    </>
  )
}

export default Announcements