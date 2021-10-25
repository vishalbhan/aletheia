import { useEffect, useRef } from 'react'
import Head from 'next/head'
import '../styles/locomotiveScroll.css'
import '../styles/globals.css'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null)

  return (
    <>
      <Head>
        <title>Aletheia | Advanced Private Tuition</title>
      </Head>
      {/* <LocomotiveScrollProvider
        options={
          {
            smooth: true,
            // ... all available Locomotive Scroll instance options 
          }
        }
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      > */}
        <main data-scroll-container ref={containerRef}>
          <Component {...pageProps} />
        </main>
      {/* </LocomotiveScrollProvider> */}
    </>
  )
}

export default MyApp
