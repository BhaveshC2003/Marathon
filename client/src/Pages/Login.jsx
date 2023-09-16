import {React,useContext,useState} from 'react'
import './Login.css'
import Header from '../components/Header/Header'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import LoadingSpinner from '../components/Spinner/Spinner'
import { UserContext } from '../context/userContext'

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
  const [isLoading, setIsLoading] = useState(false)

  const {setUser} = useContext(UserContext)
	const navigate = useNavigate()
  const handleSubmit = async(e)=>{
    e.preventDefault()
    setIsLoading(true)
    const {data} = await axios.post("http://localhost:5000/user/login",{email,password},{withCredentials:true})
    if(data.success)
    {
      setIsLoading(false)
			return navigate("/")
    }
    setIsLoading(false)

    if(data.success){
      setUser(data.user)
      return navigate("/")
    }
		console.log("error")
  }

  return (
    <>
    <div className='App'>
        <Header />
    </div>

    {isLoading ? <div style={{display:"flex", width:"100vw", height:"100vh", justifyContent:"center", alignItems:"center"}}><LoadingSpinner /></div> :
    
    <div style={{maxWidth:"100vw", maxHeight:"100vh", marginTop:"8rem",marginBottom:"5rem", marginLeft:'35rem'}}>
    <form className="form" onSubmit={handleSubmit}>
       <p className="form-title" style={{marginBottom: '1.5rem'}}>Sign in to your account</p>
        <div className="input-container">
          <input value={email} required={true} placeholder="Enter email" type="email" onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div class="input-container">
          <input value={password} required={true} placeholder="Enter password" type="password" onChange={(e)=>setPassword(e.target.value)}/>

          
        </div>
         <button className="submit" type="submit">
        Sign in
      </button>

      <p className="signup-link">
        No account?
        <a href="">Sign up</a>
      </p>
   </form>
   </div>
   }

    </>
  )
}

export default Login