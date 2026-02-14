import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/pages/Register/Register";
import "./App.css";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App;