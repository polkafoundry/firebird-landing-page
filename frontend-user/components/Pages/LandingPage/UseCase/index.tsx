import clsx from "clsx"
import Image, { StaticImageData } from "next/image"
import ButtonLink from "../../../Base/ButtonLink"
import styles from "../landing.module.scss"

import imgNft from "/public/images/usecase-nft.png"
import imgGaming from "/public/images/usecase-gaming.png"
import imgMetaverse from "/public/images/usecase-metaverse.png"

export type UseCaseTypes = {
  title: string
  image: StaticImageData
  detail: string
}

const usecases: Array<UseCaseTypes> = [
  {
    title: "Game Hub & Gaming Platform",
    image: imgGaming,
    detail:
      "Firebird is designed to scale high-performance game platforms that require a quick and seamless user experience. The goal of Firebird is to boost player-to-player and player-to-developer interactions."
  },
  {
    title: "NFT Collectibles & Marketplace",
    image: imgNft,
    detail:
      "Offering a UX comparable to traditional applications and onboard new users with a simple approach, providing a suite of integrated services for games. "
  },
  {
    title: "AR - VR & Metaverse",
    image: imgMetaverse,
    detail:
      "The Firebird's cross-chain protocol is an ideal solution to ensuring data acquisition, storage, interoperability, and privacy preservation, which are the metaverse's main driving forces."
  }
]

const UseCase = () => {
  return (
    <div
      className={clsx(
        styles.section,
        "px-8 py-[60px] md:px-[160px] md:py-[120px] text-center md:text-left"
      )}
    >
      <span className="text-main uppercase font-semibold font-birdMedium text-center tracking-wider text-sm md:text-base">
        What can you create on Firebird?
      </span>
      <div className="flex flex-col md:flex-row w-full gap-14 items-center">
        <div className="flex flex-col w-full max-w-[420px] items-center">
          <p className="text-3xl md:text-4xl max-w-[980px] font-semibold mt-2">
            Develop your blockchain ideas on the potential platform
          </p>
          <span className="mt-5 text-lg">
            Firebird offers you the flexibility, security, reliability, and
            community to build scalable and user-friendly dApps in the
            blockchain world.
          </span>

          <div className="flex mt-7">
            <ButtonLink
              href="https://firebird-1.gitbook.io/firebird-whitepaper/use-cases/what-you-can-build"
              target="_blank"
              className="text-white px-12 bg-main"
            >
              Learn More
            </ButtonLink>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {usecases.map((item: UseCaseTypes, index: number) => (
            <div
              key={index + 100}
              className={clsx(
                styles.cardHorizontalHover,
                "flex gap-5 p-5 md:p-4 flex-col md:flex-row"
              )}
              data-aos="fade-up"
            >
              <div className="relative w-full h-full md:w-[160px] md:h-[130px] mx-auto md:my-auto rounded-lg">
                <Image src={item.image} alt="" layout="fixed" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-semibold">{item.title}</span>
                <span className="">{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UseCase
