import GitHub from "../../assets/icon-github.svg"
import linkedin from "../../assets/icon-linkedin.svg"
import instagram from "../../assets/icon-instagram.svg"
import logo from "../../assets/footer-logo.png"

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-900 py-10 lg:py-20">
        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
          <article>
            <img src={logo} alt="" />
          </article>

          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Features
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Link Shortening
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Branded Links
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Analytics
                </button>
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
                <img src={GitHub} alt="" />
              </li>
              <li className="ml-4">
                <img src={linkedin} alt="" />
              </li>
              <li className="ml-4">
                <img src={instagram} alt="" />
              </li>
            </ul>
          </article>
        </div>
      </footer>
    </>
  )
}