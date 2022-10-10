import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import iconMenu from "/public/images/icon-menu.svg"
import iconClose from "/public/images/icon-close.svg"
import logo from "/public/images/logo-text.svg"
import { SocialItemTypes, socialsData } from "../../../utils/constants"
import { useRouter } from "next/router"

type RouteTypes = {
  label: string
  uri: string
}

const routes: Array<RouteTypes> = [
  {
    label: "Bird nest",
    uri: "/bird-nest"
  },
  {
    label: "Community",
    uri: "/community"
  },
  {
    label: "Documentation",
    uri: "https://docs.firebirdchain.com/"
  },
  {
    label: "FAQ",
    uri: "/faq"
  }
]

const HeaderDefaultLayout = () => {
  const { asPath } = useRouter()
  const [open, setOpen] = useState<boolean>(false)

  const handleOpenHeader = () => {
    setOpen((prevState) => !prevState)
  }

  const renderHeaderMobile = () => {
    if (!open) return <></>

    return (
      <div className="fixed top-0 left-0 w-full h-screen overflow-y-auto bg-[#04060C] flex flex-col p-5 pb-8 z-50">
        <div className="flex justify-between">
          <Image src={logo} alt="" />
          <Image
            src={iconClose}
            alt=""
            onClick={handleOpenHeader}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-6 text-white justify-center w-full text-center text-lg font-semibold mt-10">
          {routes.map((item: RouteTypes, index: number) => (
            <Link key={index} href={item.uri}>
              <a
                className={clsx("hover:tracking-wider duration-500", {
                  "text-main": asPath === item.uri
                })}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>
        <p className="mt-auto text-main text-center font-semibold uppercase tracking-widest">
          Community
        </p>
        <div className="flex gap-3 mt-4 w-full justify-center">
          {socialsData.map((item: SocialItemTypes, index: number) => (
            <a href={item.url} className={clsx("w-10 h-10")} key={index + 1000}>
              <Image src={item.img} alt="" layout="fixed" />
            </a>
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      <nav
        className={clsx(
          "absolute -translate-x-1/2 left-1/2 h-20 w-full flex items-center justify-between max-w-screen-main text-white",
          "md:px-[120px]",
          "xs:px-[60px]",
          "pl-5 pr-6"
        )}
      >
        <Link href="/">
          <a>
            <Image
              src="/images/logo-text.svg"
              width="192px"
              height="42px"
              layout="fixed"
              alt=""
            />
          </a>
        </Link>
        <div className={clsx("gap-5 hidden", "md:flex")}>
          {routes.map((item: RouteTypes, index: number) => (
            <Link key={index} href={item.uri}>
              <a
                className={clsx("hover:tracking-wider duration-500", {
                  "text-main": asPath === item.uri
                })}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>
        <div
          className={clsx("block cursor-pointer", "md:hidden")}
          onClick={handleOpenHeader}
        >
          <Image src={iconMenu} alt="" width={25} />
        </div>
      </nav>

      {renderHeaderMobile()}
    </>
  )
}

export default HeaderDefaultLayout
