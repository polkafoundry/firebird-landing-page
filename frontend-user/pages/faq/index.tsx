import Head from "next/head"
import DefaultLayout from "../../components/Layouts/DefaultLayout"
import FAQPage from "../../components/Pages/FAQPage"

const Documentation = () => {
  return (
    <>
      <Head>
        <title>Firebird FAQ</title>
        <meta
          name="description"
          content="Find answers to the questions we receive the most frequently here"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <DefaultLayout>
        <FAQPage />
      </DefaultLayout>
    </>
  )
}

export default Documentation
