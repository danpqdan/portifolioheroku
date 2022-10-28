import { Navbar } from "./styles/Navbar";
import './styles/main.css'
import { Sobre } from "./pages/Sobre";

export function App() {
  return (
    <div className="bg-blue-900 min-w-screen min-h-screen">
      <Navbar/>
      <Sobre/>
    </div>
  )
}


