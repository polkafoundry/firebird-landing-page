import AOS from "aos"
import "aos/dist/aos.css"
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

  return <Component {...pageProps} />
}

export default MyApp
