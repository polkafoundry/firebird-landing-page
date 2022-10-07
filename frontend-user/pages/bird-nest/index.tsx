import Head from "next/head"
import DefaultLayout from "../../components/Layouts/DefaultLayout"
import BirdNestPage from "../../components/Pages/BirdNestPage"

const BirdNest = () => {
  return (
    <>
      <DefaultLayout
        title="Firebird Bird Nest"
        description="Unlock the door to the Firebird World, where you can find Firebird-related news, blogs, developement hub and documentations."
      >
        <BirdNestPage />
      </DefaultLayout>
    </>
  )
}

export default BirdNest
