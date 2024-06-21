import React, { useState } from "react";
import bgMobile from "../../assets/bg-shorten-mobile.svg";
import bgDesktop from "../../assets/bg-shorten-desktop.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Shortener() {
  const [text, setText] = useState("");
  const [buttonText, setButtonText] = useState("Copy");
  const [shortenedLink, setShortenedLink] = useState(null);
  const { currentUser } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/url/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ originalUrl: text }),
      });

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }

      const data = await response.json();
      const baseUrl = window.location.origin; // Get the base URL of the application
      setShortenedLink({ original: text, short: `${baseUrl}/${data.shortCode}` });
      setText("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCopy = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      setButtonText("Copied!");

      setTimeout(() => {
        setButtonText("Copy");
      }, 2000);
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
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
            {currentUser? 
              <button
                type="submit"
                className="btn-cta rounded-lg w-full md:w-40 md:ml-5">
                Shorten It!
              </button>
              :
              <Link to="/sign-in">
                <button
                  type="button"
                  className="btn-cta rounded-lg w-full md:w-40 md:ml-5">
                  Shorten It!
                </button>
              </Link>
            }
          </div>
        </form>

        {shortenedLink && (
          <div className="flex flex-col items-center justify-center bg-white text-center md:flex-row md:justify-between p-3 mt-3 rounded-lg shadow">
            <article className="text-left md:w-1/2">
              <h6 className="truncate">{shortenedLink.original}</h6>
            </article>

            <article className="text-right md:w-1/2 flex justify-end items-center space-x-3">
              <button className="text-cyan-500 truncate">{shortenedLink.short}</button>
              <button
                onClick={() => handleCopy(shortenedLink.short)}
                className="btn-cta rounded-lg text-sm focus:bg-slate-800"
              >
                {buttonText}
              </button>
            </article>
          </div>
        )}
      </section>
    </div>
  );
}
