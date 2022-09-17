import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../assets/Reset.css';
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
