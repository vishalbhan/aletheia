import { useRef } from 'react'
import Head from 'next/head'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import '../styles/locomotiveScroll.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null)

  return (
    <>
      <Head>
        <title>Aletheia | Advanced Private Tuition</title>
      </Head>
      <LocomotiveScrollProvider
        options={
          {
            smooth: true,
            class: "in-view"
          }
        }
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <Component {...pageProps} />
        </main>
      </LocomotiveScrollProvider>
    </>
  )
}

export default MyApp
