import React, { useState } from 'react'
import Header from '../../components/Header/Header'

const CreateAnnouncementForm = () => {
    
    const [username, setUserName] = useState(' ')
    const [announcement, setAnnouncement] = useState(' ')

  return (
    <>
    <div className='App'>
        <Header />
    </div>
    
    <div style={{maxWidth:"100vw", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
    <form className="form">
       <p className="form-title">Enter announcement</p>
        <div className="input-container">
          <input value={username} required={true} placeholder="Enter username" type="email" onChange={(e)=>setUserName(e.target.value)}/>
      </div>
      <div class="input-container">
          <textarea style={{width:"95%"}} value={announcement} required={true} placeholder="Start typing..." type="text" onChange={(e)=>setAnnouncement(e.target.value)}/>
        </div>
   </form>
   </div>

    </>
  )
}

export default CreateAnnouncementForm