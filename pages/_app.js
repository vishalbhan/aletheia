import { useEffect, useRef } from 'react'
import Head from 'next/head'
import '../styles/locomotiveScroll.css'
import '../styles/globals.css'
import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll'
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerProxy = () => {
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (scroll) {
      const element = scroll?.el;

      scroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: element.style.transform ? "transform" : "fixed",
      });
    }

    return () => {
      ScrollTrigger.addEventListener("refresh", () => scroll?.update());
      ScrollTrigger.refresh();
    };
  }, [scroll]);

  return null;
};

function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null)

  useEffect(() => {
    document.querySelector('body').classList.add('bg-dark')
  }, [])

  return (
    <>
      <Head>
        <title>Aletheia | Advanced Private Tuition</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <LocomotiveScrollProvider
        options={
          {
            smooth: true,
            class: "in-view",
            smartphone: {
              smooth: true
            },
            tablet: {
                smooth: true
            }
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
      >
        <main data-scroll-container ref={containerRef}>
          <ScrollTriggerProxy />
          <Component {...pageProps} />
        </main>
      </LocomotiveScrollProvider>
    </>
  )
}

export default MyApp
