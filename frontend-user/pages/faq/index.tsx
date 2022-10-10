import DefaultLayout from "../../components/Layouts/DefaultLayout"
import FAQPage from "../../components/Pages/FAQPage"

const Documentation = () => {
  return (
    <>
      <DefaultLayout
        title="Firebird FAQ"
        description="Find answers to the questions we receive most often here."
      >
        <FAQPage />
      </DefaultLayout>
    </>
  )
}

export default Documentation
