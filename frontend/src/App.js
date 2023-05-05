import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Products from "./Pages/Products"
import Navbar from "./components/Navbar/Navbar"
import Login from "./Pages/Login"
import Orders from "./Pages/Orders"
function App() {
  return (
    <div>
      {/* navbar */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/orders" element={<Orders/>} />
      </Routes>
      
    </div>
  );
}

export default App;
