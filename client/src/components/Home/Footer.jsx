import GitHub from "../../assets/icon-github.svg";
import linkedin from "../../assets/icon-linkedin.svg";
import instagram from "../../assets/icon-instagram.svg";
import logo from "../../assets/footer-logo.png";
import { Link } from "react-router-dom";

export default function Footer({ scrollToShortener }) {
  return (
    <>
      <footer className="bg-slate-900 py-10 lg:py-20">
        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
          <article>
            <Link to="/">
              <img src={logo} alt="Shortify" />
            </Link>
          </article>

          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Features
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-1" onClick={ scrollToShortener }>
                  Link Shortening
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1" onClick={ scrollToShortener }>
                  Branded Links
                </button>
              </li>
              <li>
                <Link to="/myurls">
                  <button className="text-slate-200 text-sm mt-1">
                    Analytics
                  </button>
                </Link>
              </li>
            </ul>
          </article>

          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Resources
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-1">Blog</button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Developer
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">Support</button>
              </li>
            </ul>
          </article>

          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Company
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-1">About Us</button>
              </li>
            </ul>
          </article>

          <article>
            <ul className="flex items-center">
              <li>
                <a href="https://github.com/Yashagrahari07"><img src={GitHub} alt="GitHub" /></a>
              </li>
              <li className="ml-4">
                <a href="https://www.linkedin.com/in/yashagrahari/"><img src={linkedin} alt="LinkedIN" /></a>
              </li>
              <li className="ml-4">
                <img src={instagram} alt="Instagram" />
              </li>
            </ul>
          </article>
        </div>
      </footer>
    </>
  )
}