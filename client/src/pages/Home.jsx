import React, { useRef } from 'react'
import Showcase from '../components/Home/Showcase'
import Shortener from '../components/Home/Shortner'
import Advanced from '../components/Home/Advanced'
import Boost from '../components/Home/Boost'
import Footer from '../components/Home/Footer'

export default function Home() {
    const shortenerRef = useRef(null);

    const scrollToShortener = () => {
        if (shortenerRef.current) {
          shortenerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

  return (
    <>
      <Showcase scrollToShortener={scrollToShortener} />
      <div ref={shortenerRef}>
        <Shortener/>
      </div>
      <Advanced/>
      <Boost scrollToShortener={scrollToShortener} />
      <Footer/>
    </>
  )
}
