import Sidebar from "./components/Sidebar"
import Home from "./components/Home"
import { GenreProvider } from "./contexts/Genre"

function App() {
  

  return (
    <GenreProvider>
      <div className="flex">
        <Sidebar />
        <div className="min-h-screen w-full bg-gradient-to-br from-[#310E68] to-[#5F0F40]">
          <Home />
        </div>
      </div>
    </GenreProvider>
    
  )
}

export default App
