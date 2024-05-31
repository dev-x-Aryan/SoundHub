import Sidebar from "./components/Sidebar"
import Home from "./components/Home"
import { Login } from "./components/Login"
import { useAuth } from "./contexts/AuthContext"
import {Routes, Route } from 'react-router-dom'
import Library from "./components/Library"

function App() {

  const {token} = useAuth();

  return (!token ? (
    <Routes>
      <Route path="/*" element={<Login />} />
    </Routes>
  ):(
    <>
      <div className="flex">
        <Sidebar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/library" element={<Library/>} />
          </Routes>
          
        </div>
      </div>
    </>
    )
  )
}

export default App
