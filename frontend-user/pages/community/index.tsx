import Head from "next/head"
import DefaultLayout from "../../components/Layouts/DefaultLayout"
import CommunityPage from "../../components/Pages/CommunityPage"

const Community = () => {
  return (
    <>
      <Head>
        <title>Firebird Community</title>
        <meta
          name="description"
          content="A space for all blockchain enthusiasts. Developers, investors, users, etc., everyone is welcome!"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <DefaultLayout>
        <CommunityPage />
      </DefaultLayout>
    </>
  )
}

export default Community
