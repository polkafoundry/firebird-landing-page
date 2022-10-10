import DefaultLayout from "../../components/Layouts/DefaultLayout"
import CommunityPage from "../../components/Pages/CommunityPage"

const Community = () => {
  return (
    <>
      <DefaultLayout
        title="Firebird Community"
        description="An organized universe for all blockchain builders, investors, enthusiasts, and ecosystem users. Start turning your dreams into reality today."
      >
        <CommunityPage />
      </DefaultLayout>
    </>
  )
}

export default Community
