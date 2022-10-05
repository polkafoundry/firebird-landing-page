import Image from "next/image"
import { SocialItemTypes, socialsData } from "../../../utils/constants"
import logoText from "/public/images/logo-text.svg"
import Tippy from "@tippyjs/react"

const buyPkfExchanges = [
  {
    name: "Uniswap",
    url: "https://app.uniswap.org/#/swap?outputCurrency=0x8B39B70E39Aa811b69365398e0aACe9bee238AEb"
  },
  {
    name: "Ascendex",
    url: "https://ascendex.com/en/basic/cashtrade-spottrading/usdt/pkf"
  },
  {
    name: "Gate.io",
    url: "https://www.gate.io/vi/trade/pkf_usdt"
  },
  {
    name: "Kucoin",
    url: "https://www.kucoin.com/trade/PKF-USDT"
  }
]

const siteMaps = [
  {
    label: "Bird Nest",
    url: "/bird-nest"
  },
  {
    label: "Documentation",
    url: "https://firebird-1.gitbook.io/firebird-whitepaper/"
  },
  {
    label: "Community",
    url: "/community"
  },
  {
    label: "FAQ",
    url: "/faq"
  }
]

const FooterDefaultLayout = () => {
  return (
    <div className="bg-black text-white w-full">
      <div className="flex flex-col max-w-screen-main px-40 mx-auto pt-24 mb-3 box-border">
        <div className="w-full flex">
          <div className="flex flex-col max-w-[300px]">
            <div className="flex">
              <Image src={logoText} alt="" />
            </div>
            <p className="text-sm mt-3">
              Follow us on Firebird official groups and channels so you won’t
              miss anything!
            </p>
            <div className="flex gap-3 mt-3">
              {socialsData.map((item: SocialItemTypes, index: number) => (
                <Tippy key={index} content={item.label} placement="bottom">
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <Image src={item.img} alt="" width={28} height={28} />
                  </a>
                </Tippy>
              ))}
            </div>
          </div>

          <div className="flex mt-auto ml-auto">
            <div className="flex flex-col max-w-[250px]">
              <p className="font-semibold">BUY PKF</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {buyPkfExchanges.map((item: any, index: number) => (
                  <a
                    href={item.url}
                    key={index + 100}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full max-w-[120px] hover:underline"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col ml-20 max-w-[250px]">
              <p className="font-semibold">Sitemap</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {siteMaps.map((item: any, index: number) => (
                  <a
                    key={index + 100}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full max-w-[120px] hover:underline"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-16">
          Copyright © 2022 . All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default FooterDefaultLayout
