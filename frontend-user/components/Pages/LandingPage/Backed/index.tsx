import clsx from "clsx"
import Image, { StaticImageData } from "next/image"
import landingStyles from "../landing.module.scss"
import styles from "./backed.module.scss"

import logoAspo from "/public/images/partners/aspo.png"
import logoEvermoon from "/public/images/partners/evermoon.png"
import logoF2C from "/public/images/partners/f2c.png"
import logoGunstar from "/public/images/partners/gunstar.png"
import logoMasterWar from "/public/images/partners/master-war.png"
import logoMonsterra from "/public/images/partners/monsterra.png"
import logoNFTTrade from "/public/images/partners/nft-trade.png"
import logoPlanetSandbox from "/public/images/partners/planet-sanbox.png"

type PartnerTypes = {
  name: string
  image: StaticImageData
  uri: string
}

const partners: Array<PartnerTypes> = [
  {
    image: logoAspo,
    name: "Aspo",
    uri: "https://aspo.world/"
  },
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
  {
    image: logoPlanetSandbox,
    name: "Planet Sandbox",
    uri: "https://planetsandbox.io/"
  },
  {
    image: logoNFTTrade,
    name: "NFTTrade",
    uri: "https://nftrade.com/"
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

const Backed = () => {
  return (
    <div className={styles.bgBacked}>
      <div
        className={clsx(
          landingStyles.section,
          "px-5 xs:px-16 md:px-[138px] pt-[60px] xs:pt-20"
        )}
      >
        <div className="flex flex-col justify-center">
          {/* <p className="text-4xl font-semibold text-center w-full">Backed by</p>
          <a
            href="https://icetea.io/"
            target="_blank"
            rel="noreferrer"
            className={clsx(
              "flex flex-col px-12 pt-10 pb-7 mt-7 bg-white w-fit mx-auto rounded-[32px] justify-center",
              "xs:mt-8",
              "md:mt-7"
            )}
          >
            <div className="relative mx-auto">
              <Image
                src="/images/logo-icetea.svg"
                alt=""
                width={90}
                height={90}
                layout="fixed"
              />
            </div>
            <p className="text-center text-xl font-semibold">Icetea Labs</p>
          </a> */}

          <p className="mt-[60px] text-center font-semibold text-4xl xs:mt-20 md:hidden">
            Our partners
          </p>

          <p className="mt-20 text-center font-semibold text-4xl max-w-[980px] mx-auto hidden md:block">
            <span className="bg-main text-white px-1 rounded-md">
              Quality partners
            </span>{" "}
            prioritize long-term development to provide cutting-edge user
            experience and benefits
          </p>

          <div
            className={clsx(
              "w-full grid grid-cols-2 gap-3 mt-5 justify-center",
              "xs:grid-cols-4",
              "md:flex md:flex-wrap xs:mt-8 md:mt-7"
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
        </div>
      </div>
    </div>
  )
}

export default Backed
