import Head from "next/head"
import DefaultLayout from "../../components/Layouts/DefaultLayout"
import BirdNestPage from "../../components/Pages/BirdNestPage"

const BirdNest = () => {
  return (
    <>
      <Head>
        <title>Firebird Nest</title>
        <meta
          name="description"
          content="Unlock the door to the Firebird World"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <DefaultLayout>
        <BirdNestPage />
      </DefaultLayout>
    </>
  )
}

export default BirdNest
