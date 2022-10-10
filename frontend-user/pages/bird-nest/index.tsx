import DefaultLayout from "../../components/Layouts/DefaultLayout"
import BirdNestPage from "../../components/Pages/BirdNestPage"

const BirdNest = () => {
  return (
    <>
      <DefaultLayout
        title="Firebird Bird Nest"
        description="Fly into the Firebird world"
      >
        <BirdNestPage />
      </DefaultLayout>
    </>
  )
}

export default BirdNest
