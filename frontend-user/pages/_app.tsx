import AOS from "aos"
import "aos/dist/aos.css"
import Script from "next/script"
import { useEffect } from "react"
import "tippy.js/dist/tippy.css"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: "mobile"
    })
  }, [])

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6JQ1NZ8D6T"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6JQ1NZ8D6T');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
