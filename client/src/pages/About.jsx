import React from 'react';
import illustration from '../assets/illustration-about.svg';

export default function About() {
  return (
    <section id="about" className="py-10">
      <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:place-items-center">
        <article className="text-center md:text-left">
          <h1 className="text-5xl lg:text-6xl mb-5 font-bold text-slate-800">
            What is Shortify?
          </h1>
          <p className="lg:text-lg text-slate-400 mb-10">
            Shortify is a modern URL shortening service that streamlines link sharing by transforming long, complex URLs into concise and memorable ones. It's designed for ease of use across various digital platforms, offering enhanced efficiency and aesthetics for shared links.
          </p>
          <p className="lg:text-lg text-slate-400">
            Alongside its shortening capabilities, Shortify provides robust analytics tools to track link performance metrics such as click-through rates and geographic data. This empowers users to gain valuable insights into audience engagement and optimize their digital strategies effectively.
          </p>
        </article>

        <article>
          <img src={illustration} alt="About Illustration" className="max-w-full" />
        </article>
      </div>
    </section>
  );
}
