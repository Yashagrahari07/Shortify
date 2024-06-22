import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import MyUrls from "./pages/MyUrls.jsx";
import About from "./pages/About.jsx";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile.jsx";
import Redirect from "./pages/Redirect.jsx";
import UrlDetails from "./pages/UrlDetails.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

function getPageTitle(pathname) {
  switch (pathname) {
    case '/':
      return 'Shortify: Home';
    case '/myurls':
      return 'Shortify: My Urls';
    case '/about':
      return 'Shortify: About';
    case '/sign-in':
      return 'Shortify: Sign In';
    case '/sign-up':
      return 'Shortify: Sign Up';
    case '/profile':
      return 'Shortify: Profile';
    default:
      return 'Shortify';
  }
};

function PageRoutes() {
  const location = useLocation();

  useEffect(() => {
    document.title = getPageTitle(location.pathname);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/:shortId/*" element={<Redirect />} />
      
      <Route element={<PrivateRoute/>}>
        <Route path="/myurls" element={<MyUrls />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/details/:shortId/*" element={<UrlDetails />} />
      </Route>
      
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
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <PageRoutes />
    </BrowserRouter>
  );
}
