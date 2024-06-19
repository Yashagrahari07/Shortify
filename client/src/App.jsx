import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx"
import MyUrls from "./pages/MyUrls.jsx";
import About from "./pages/About.jsx";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/myurls" element={<MyUrls/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
  )
}