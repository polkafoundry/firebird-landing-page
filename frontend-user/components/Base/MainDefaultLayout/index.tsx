import React from "react"

type LayoutProps = {
  children: any
}
const MainDefaultLayout = (props: LayoutProps) => {
  return <div className="flex-1 bg-[#f7f7f8]">{props.children}</div>
}

export default MainDefaultLayout
