import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Cart from "./routes/Cart";
import Wishlist from "./routes/Wishlist";
import Login from "./routes/Login";
import Signup from "./routes/Signup";

function App() {
  return (
    <div className="App">
      <header></header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <footer></footer>
    </div>
  );
}

export default App;
