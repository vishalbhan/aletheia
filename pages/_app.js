import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>Aletheia | Advanced Private Tuition</title>
        </Head>

        <Component {...pageProps} />
      </>
  )
}

export default MyApp
