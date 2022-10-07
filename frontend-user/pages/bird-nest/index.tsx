import DefaultLayout from "../../components/Layouts/DefaultLayout"
import BirdNestPage from "../../components/Pages/BirdNestPage"

const BirdNest = () => {
  return (
    <>
      <DefaultLayout
        title="Firebird Bird Nest"
        description="Dive into the Firebird ecosystem to learn more about the platform’s features, solutions, infrastructure, roadmap, etc. Understand from A-Z about us, including the motivation behind building Firebird."
      >
        <BirdNestPage />
      </DefaultLayout>
    </>
  )
}

export default BirdNest
