import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { useState } from "react";
import "../assets/Reset.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Menu from "./Menu";
import Cart from "./Cart";

export default function App() {
  const [data, setData] = useState([]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState("Usuário");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [products, setProducts] = useState([])

  return (
    <>
      <UserContext.Provider
        value={{
          data,
          setData,
          user,
          setUser,
          token,
          setToken,
          cart,
          setCart,
          total,
          setTotal,
          name,
          setName,
          cpf,
          setCpf,
          products, 
          setProducts
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/home" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
