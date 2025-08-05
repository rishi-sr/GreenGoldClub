// #fffceb background
//main color #0c4121
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss'
import Home from "./Pages/home/Home";

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
