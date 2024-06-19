import React, { useState } from "react";
import bgMobile from "../../assets/bg-shorten-mobile.svg";
import bgDesktop from "../../assets/bg-shorten-desktop.svg";

export default function Shortener() {
  const [text, setText] = useState("");
  const [buttonText, setButtonText] = useState("Copy");
  const [shortenedLinks, setShortenedLinks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const handleCopy = (link) => {
    
  };

  return (
    <div style={{ background: "linear-gradient(to bottom, white 50%, #f3f4f6 50%)" }}>
        <section id="shortener-section" className="max-w-full shortener relative lg:max-w-5xl lg:mx-auto xl:max-w-6xl">
            <picture>
                <source media="(min-width: 768px)" srcSet={bgDesktop} />
                <img src={bgMobile} alt="" />
            </picture>

            <form className="form" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row">
                <input
                    type="url"
                    placeholder="Shorten a link here"
                    className="w-full py-2 px-5 rounded-lg mb-2 md:mb-0 md:w-2/3"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    type="submit"
                    className="btn-cta rounded-lg w-full md:w-40 md:ml-5"
                >
                    Shorten It!
                </button>
                </div>
            </form>

            {shortenedLinks.length > 0 && (
                <div className="flex flex-col items-center justify-center bg-white text-center md:flex-row md:justify-between p-3 mt-3 rounded-lg shadow">
                {shortenedLinks.map((link, index) => (
                    <div key={index} className="w-full mb-4 md:mb-0 md:flex md:justify-between md:items-center">
                    <article className="w-full">
                        <h6 className="mb-3 md:mb-0">{link.original}</h6>
                    </article>

                    <article className="w-full">
                        <ul className="md:flex md:items-center">
                        <li className="md:mr-5">
                            <button className="text-cyan-500">{link.short}</button>
                        </li>
                        <li>
                            <button
                            onClick={() => handleCopy(link.short)}
                            className="btn-cta rounded-lg text-sm focus:bg-slate-800"
                            >
                            {buttonText}
                            </button>
                        </li>
                        </ul>
                    </article>
                    </div>
                ))}
                </div>
            )}
        </section>
    </div>
  );
}
