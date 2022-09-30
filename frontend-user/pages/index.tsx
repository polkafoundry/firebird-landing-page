import type { NextPage } from "next"
import Head from "next/head"
import LandingLayout from "../components/Layouts/LandingLayout"
import LandingPage from "../components/Pages/LandingPage"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Firebird</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <LandingLayout>
        <LandingPage />
      </LandingLayout>
    </div>
  )
}

export default Home
