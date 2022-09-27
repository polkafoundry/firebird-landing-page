import FooterDefaultLayout from "../Base/FooterDefaultLayout"
import HeaderDefaultLayout from "../Base/HeaderDefaultLayout"
import MainDefaultLayout from "../Base/MainDefaultLayout"

type LayoutProps = {
  children?: any
}
const LandingLayout = (props: LayoutProps) => {
  const { children } = props

  return (
    <>
      <HeaderDefaultLayout />
      <MainDefaultLayout>{children}</MainDefaultLayout>
      <FooterDefaultLayout />
    </>
  )
}

export default LandingLayout
