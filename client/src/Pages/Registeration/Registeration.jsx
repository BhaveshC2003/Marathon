import React, { useState } from 'react'
import './Registeration.css'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import Webcam from 'react-webcam'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Registeration = () => {

    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [image,setImage] = useState(null)
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
      e.preventDefault()
      const {data} = await axios.post("http://localhost:5000/user/register",{username,email,password,image},
      {headers:{"Content-Type":"multipart/form-data"}})
      if(data.success)
        return navigate("/")
      console.log("error")
    }


  return (
    <>
    <div className='App'>
        <Header />
    </div>
    
    <div style={{display:"flex", justifyContent:"space-around"}}>
    <div style={{maxWidth:"100vw", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
    <form className="form-register" onSubmit={handleSubmit}>
       <p className="form-title">Enter your details</p>
        
        <br />

        <div className="input-container">
          <input placeholder="Name" type="text" 
          value={username}
          onChange={(e)=>setUserName(e.target.value)}/>
        </div>
        

        <div className="input-container">
          <input placeholder="Enter email" type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        </div>

        <div class="input-container">
          <input placeholder="Enter password" type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)} />
        </div>
        
        <br />

        <button className="submit" type="submit" style={{marginBottom:"0.5rem"}}>
        Register
      </button>

      <p className="signup-link">
        Already Registered?
        <Link to='/login'>Login</Link>
      </p>
   </form>
   </div>

   <div style={{marginTop:"3.5rem"}}>
    <Webcam mirrored={true} 
    screenshotFormat='image/jpeg'
    height={500}
    width={500}>
    
    {({ getScreenshot }) => (
      <button className='submit'
        onClick={(e) => {
          e.preventDefault()
          const imageSrc = getScreenshot()
          setImage(imageSrc)
        }}
      >
        Capture photo
      </button>
    )}
    </Webcam>
   </div>

   </div>

    </>
  )
}

export default Registeration