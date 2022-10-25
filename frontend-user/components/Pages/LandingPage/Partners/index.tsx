import clsx from "clsx"
import Image, { StaticImageData } from "next/image"
import landingStyles from "../landing.module.scss"
import styles from "./backed.module.scss"

import redkite from "/public/images/redkite-launchpad.png"

import logoAspo from "/public/images/partners/aspo.png"
import logoEvermoon from "/public/images/partners/evermoon.png"
import logoF2C from "/public/images/partners/f2c.png"
import logoGunstar from "/public/images/partners/gunstar.png"
import logoMasterWar from "/public/images/partners/master-war.png"
import logoMonsterra from "/public/images/partners/monsterra.png"
import logoNFTTrade from "/public/images/partners/nft-trade.png"
import logoFaraland from "/public/images/partners/faraland.png"
import logoWanaka from "/public/images/partners/wanaka.png"
import ButtonLink from "../../../Base/ButtonLink"

type PartnerTypes = {
  name: string
  image: StaticImageData
  uri: string
}

const partners: Array<PartnerTypes> = [
  // {
  //   image: logoAspo,
  //   name: "Aspo",
  //   uri: "https://aspo.world/"
  // },
  {
    image: logoGunstar,
    name: "Gunstar",
    uri: "https://gunstar.io/"
  },
  {
    image: logoMonsterra,
    name: "Monsterra",
    uri: "https://monsterra.io/"
  },
  // {
  //   image: logoFaraland,
  //   name: "Faraland",
  //   uri: "https://faraland.io/"
  // },
  {
    image: logoWanaka,
    name: "Wanaka",
    uri: "https://wanakafarm.com/"
  },
  {
    image: logoMasterWar,
    name: "My Master War",
    uri: "https://mymasterwar.com/"
  },
  {
    image: logoEvermoon,
    name: "Evermoon",
    uri: "https://www.evermoon.games/"
  },
  {
    image: logoF2C,
    name: "F2C",
    uri: "https://f2nft.games/"
  }
]

const Partners = () => {
  return (
    <div className={styles.bgBacked}>
      <div
        className={clsx(
          landingStyles.section,
          "px-5 pt-[60px]",
          "lg:px-[138px]",
          "md:px-[120px]",
          "xs:pt-20 xs:px-16"
        )}
      >
        <div className="flex flex-col justify-center">
          <p className="mt-[60px] text-center font-semibold text-4xl xs:mt-20 md:hidden">
            Our partners
          </p>

          <div className="flex flex-col w-full md:px-[60px] mt-10">
            <span className="text-main uppercase font-semibold font-birdMedium text-center tracking-wider text-sm md:text-base">
              Projects built on our Testnet
            </span>
            <p
              className={clsx(
                "text-center text-3xl md:text-4xl max-w-[1080px] mx-auto font-semibold mt-2 mb-0"
              )}
            >
              Testnet version 1 has officially launched with the cooperation of
              six potential projects
            </p>
          </div>

          <div
            className={clsx(
              "w-full mx-auto grid grid-cols-2 gap-3 mt-5 justify-center",
              "sm:grid-cols-4",
              "md:flex md:flex-wrap xs:mt-8 md:mt-7 justify-center"
              // "lg:grid-cols-4 lg:grid lg:w-fit"
            )}
          >
            {partners.map((item: PartnerTypes, index: number) => (
              <a
                key={index + 1000}
                href={item.uri}
                target="_blank"
                rel="noreferrer"
                className={clsx(
                  "bg-white rounded-[32px] pt-7 pb-5 flex flex-col justify-center items-center",
                  "md:w-[184px] md:pt-9 md:pb-7"
                )}
                data-aos="zoom-in"
              >
                <div
                  className={clsx(
                    "relative w-[68px] h-[68px]",
                    "md:w-20 md:h-20"
                  )}
                >
                  <Image src={item.image} alt="" />
                </div>
                <p className="font-semibold mt-1">{item.name}</p>
              </a>
            ))}
          </div>

          <div className="mt-[120px] flex flex-col">
            <span className="text-center text-4xl font-semibold">In-house</span>
            <div
              className={clsx(
                "flex mt-10 items-center flex-col-reverse",
                "md:flex-row"
              )}
            >
              <div
                className={clsx(
                  "w-full flex flex-col text-center",
                  "lg:px-10 md:pr-10 md:w-1/2 md:text-left"
                )}
              >
                <span
                  className={clsx(
                    "font-semibold text-xl",
                    "xs:text-3xl md:text-2xl lg:text-32px"
                  )}
                >
                  A cutting-edge launchpad powered by Firebird as a part of the
                  growing $PKF ecosystem
                </span>
                <span
                  className={clsx(
                    "mt-3 text-sm",
                    "xs:text-22px md:text-base lg:text-xl"
                  )}
                >
                  Red Kite is one of the leading launchpads in the world with
                  70+ projects that have successfully launched, a seasoned
                  leadership team, a network of high-class VCs and marketing
                  partners, vibrant communities, and many more.{" "}
                </span>
                <div className="flex mt-7">
                  <ButtonLink
                    href="https://redkitepad.com/"
                    target="_blank"
                    className="px-[43px] bg-black text-white mx-auto md:mx-0"
                  >
                    Discover More
                  </ButtonLink>
                </div>
              </div>

              <div
                className={clsx(
                  "w-full relative mb-8 flex justify-center",
                  "md:w-1/2 md:mb-0"
                )}
                data-aos="zoom-in"
              >
                <Image src={redkite} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
