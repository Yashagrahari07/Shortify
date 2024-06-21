import React from 'react';
import illustration from '../assets/illustration-about.svg';

export default function About() {
  return (
    <section id="about" className="pt-10">
      <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:place-items-center">
        <article className="text-center md:text-left">
          <h1 className="text-3xl lg:text-5xl mb-5 font-bold text-slate-800">
            What is Shortify?
          </h1>
          <p className="lg:text-lg text-slate-400 mb-10">
            Shortify is a sleek URL shortening service that turns long URLs into short, memorable links, perfect for sharing across digital platforms.
          </p>
          <h2 className="text-4xl mb-5 font-bold text-slate-800">
            Features
          </h2>
          <ul className="feature-list lg:text-lg text-slate-400 mb-10">
            <div className="pl-10">
              <li>Instantly shorten and copy URLs.</li>
              <li>View all shortened URLs in one place with detailed analytics.</li>
              <li>Track metrics like original URL, shortened URL, expiration date, and total clicks.</li>
              <li>Redirect to the original URL when the shortened link is clicked.</li>
              <li>Access detailed analytics by clicking the original URL.</li>
              <li>See visit history and generate QR codes for easy sharing.</li>
            </div>
          </ul>
        </article>

        <article>
          <img src={illustration} alt="About Illustration" className="max-w-full" />
        </article>
      </div>
    </section>
  );
}
