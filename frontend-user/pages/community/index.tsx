import DefaultLayout from "../../components/Layouts/DefaultLayout"
import CommunityPage from "../../components/Pages/CommunityPage"

const Community = () => {
  return (
    <>
      <DefaultLayout
        title="Firebird Community"
        description="A space for all blockchain enthusiasts. Developers, investors, users, etc., everyone is welcome!"
      >
        <CommunityPage />
      </DefaultLayout>
    </>
  )
}

export default Community
