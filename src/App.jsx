import {Outlet} from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="lg:px-24">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
