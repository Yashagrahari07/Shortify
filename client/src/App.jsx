import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import MyUrls from "./pages/MyUrls.jsx";
import About from "./pages/About.jsx";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile.jsx";
import Redirect from "./pages/Redirect.jsx";
import UrlDetails from "./pages/UrlDetails.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myurls" element={<MyUrls />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/:shortId/*" element={<Redirect />} />
        <Route path="/details/:shortId/*" element={<UrlDetails />} />

        <Route
          path="/404"
          element={
            <div className="flex flex-col items-center">
              <p className="text-lg text-black mb-4">404 Not Found !!</p>
              <p className="text-sm text-gray-500">Oops! The page you are looking for does not exist.</p>
            </div>
          }
        />

        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
