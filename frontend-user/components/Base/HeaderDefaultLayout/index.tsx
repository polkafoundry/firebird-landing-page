import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { HTMLAttributeAnchorTarget, useState } from "react"
import {
  REBRAND_INFO_URL,
  SocialItemTypes,
  socialsData
} from "../../../utils/constants"

import imgBell from "/public/images/banner-bell.svg"
import iconClose from "/public/images/icon-close.svg"
import iconMenu from "/public/images/icon-menu.svg"
import logo from "/public/images/logo-text.svg"

type RouteTypes = {
  label: string
  uri: string
  target?: HTMLAttributeAnchorTarget
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
    uri: "https://docs.firebirdchain.com/",
    target: "_blank"
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
                target={item?.target ?? "_self"}
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
      <div className="flex bg-[#FB7800] w-full md:h-[44px] h-[52px] justify-center items-center">
        <div className="relative md:block h-fit hidden pt-2">
          <Image src={imgBell} alt="" width={32} />
        </div>
        <p className="m-0 mx-3 text-sm md:text-base text-center">
          <b>PolkaFoundry has rebranded as Firebird. </b>
          <br className="block md:hidden" />
          <span className="">See more information </span>
          <a
            href={REBRAND_INFO_URL}
            target="_blank"
            rel="noreferrer"
            className="underline font-semibold"
          >
            HERE
          </a>
        </p>
        <div className="relative md:block h-fit hidden pt-2">
          <Image src={imgBell} alt="" width={32} />
        </div>
      </div>

      <nav
        className={clsx(
          "absolute md:top-[44px] top-[52px] -translate-x-1/2 left-1/2 h-20 w-full flex items-center justify-between max-w-screen-main text-white",
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
                target={item?.target ?? "_self"}
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
