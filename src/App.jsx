import Sidebar from "./components/Sidebar"
import Home from "./components/Home"
import { Login } from "./components/Login"
import {useState, useEffect} from 'react'

function App() {
  const [token, setToken] = useState(null);
  useEffect(()=>{
    const hash = window.location.hash;
    const tok = hash.split("&")[0].split("=")[1];
    window.localStorage.setItem("token",tok);
    setToken[tok]; 
  },[])

  return (!token?(<Login/>)  :(
    <>
      <div className="flex">
        <Sidebar />
        <div className="min-h-screen w-full bg-gradient-to-br from-[#310E68] to-[#5F0F40]">
          <Home />
        </div>
      </div>
    </>
    )
  )
}

export default App
