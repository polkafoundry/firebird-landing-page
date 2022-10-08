import DefaultLayout from "../../components/Layouts/DefaultLayout"
import FAQPage from "../../components/Pages/FAQPage"

const Documentation = () => {
  return (
    <>
      <DefaultLayout
        title="Firebird FAQ"
        description="Find answers to the questions we receive the most frequently here."
      >
        <FAQPage />
      </DefaultLayout>
    </>
  )
}

export default Documentation
