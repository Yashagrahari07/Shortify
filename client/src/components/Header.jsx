import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentUser = useSelector((state) => state.user.currentUser);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className="header max-width py-5">
        <div className="flex items-center justify-between">
          <article className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Shortify" />
            </Link>

            <nav className="hidden md:block md:ml-5">
              <ul className="flex items-start justify-start">
                <li>
                  <Link
                    to="/"
                    className={
                      isActive("/") ? "text-cyan-500" : "text-slate-400"
                    }
                  >
                    Home
                  </Link>
                </li>
                <li className="my-5 md:my-0 md:mx-5">
                  <Link
                    to="/myurls"
                    className={
                      isActive("/myurls") ? "text-cyan-500" : "text-slate-400"
                    }
                  >
                    My URL's
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={
                      isActive("/about") ? "text-cyan-500" : "text-slate-400"
                    }
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </nav>
          </article>

          {currentUser ? ( // Conditionally rendering based on currentUser
            <div className="hidden md:block">
              <ul className="flex items-center ml-5">
                <li className="my-5 md:my-0 md:mr-5">
                  <Link to="/profile" className="btn-cta rounded-full">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <div className="hidden md:block">
                <ul className="flex items-center ml-5">
                  <li className="my-5 md:my-0 md:mr-5">
                    <Link to="/sign-in" className="text-slate-400">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/sign-up" className="btn-cta rounded-full">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>

              {isOpen && (
                <div className="absolute left-5 right-5 top-20 rounded bg-slate-900 text-slate-200 text-center py-10 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0 md:flex md:items-center">
                  <nav className="md:hidden">
                    <ul className="flex flex-col items-center justify-center">
                      <li>
                        <Link
                          to="/"
                          className={
                            isActive("/") ? "text-cyan-500" : "text-slate-400"
                          }
                        >
                          Home
                        </Link>
                      </li>
                      <li className="my-5">
                        <Link
                          to="/myurls"
                          className={
                            isActive("/myurls")
                              ? "text-cyan-500"
                              : "text-slate-400"
                          }
                        >
                          My URL's
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          className={
                            isActive("/about")
                              ? "text-cyan-500"
                              : "text-slate-400"
                          }
                        >
                          About Us
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <ul className="flex flex-col items-center justify-center">
                    <li className="my-5">
                      <Link to="/sign-in" className="text-slate-400">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/sign-up" className="btn-cta rounded-full">
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </div>
              )}

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="uppercase text-sm tracking-wide md:hidden"
              >
                {isOpen ? "Close" : "Menu"}
              </button>
            </>
          )}
        </div>
      </header>
    </>
  );
}
