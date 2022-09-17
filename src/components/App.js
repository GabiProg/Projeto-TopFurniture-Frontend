import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { useState } from "react";
import "../assets/Reset.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Menu from "./Menu";

export default function App() {

  const [data, setData] = useState([])
  const [token, setToken] = useState('')
  const [user, setUser] = useState('Usuário')

  return (
    <>
      <UserContext.Provider value={{data, setData, user, setUser, token, setToken }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/home" element={<Menu />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
