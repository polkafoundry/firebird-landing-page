import clsx from "clsx"
import Image from "next/image"
import ButtonLink from "../../../Base/ButtonLink"
import styles from "../landing.module.scss"

export type UseCaseTypes = {
  title: string
  image: string
  detail: string
}
const usecases: Array<UseCaseTypes> = [
  {
    title: "Game Hub & Gaming Platform",
    image: "/images/usecase-gaming.png",
    detail:
      "Firebird is designed to scale high-performance game platforms that require a quick and seamless user experience. The goal of Firebird is to boost player-to-player and player-to-developer interactions."
  },
  {
    title: "NFT Collectibles & Marketplace",
    image: "/images/usecase-nft.png",
    detail:
      "Offering a UX comparable to traditional applications and onboard new users with a simple approach, providing a suite of integrated services for games. "
  },
  {
    title: "AR - VR & Metaverse",
    image: "/images/usecase-metaverse.png",
    detail:
      "The Firebird's cross-chain protocol is an ideal solution to ensuring data acquisition, storage, interoperability, and privacy preservation, which are the metaverse's main driving forces."
  }
]
const UseCase = () => {
  return (
    <div className={clsx(styles.section, "px-[160px] py-[120px]")}>
      <span className="text-main uppercase font-semibold font-birdMedium text-center tracking-wider">
        What can you create on Firebird?
      </span>
      <div className="flex w-full gap-14">
        <div className="flex flex-col w-full max-w-[420px]">
          <p className="text-[40px] leading-[52px] max-w-[980px] font-semibold mt-2">
            Develop your blockchain ideas on the potential platform
          </p>
          <span className="mt-5 text-lg">
            Firebird offers you the flexibility, security, reliability, and
            community to build scalable and user-friendly dApps in the
            blockchain world.
          </span>

          <div className="flex mt-7">
            <ButtonLink
              href="/"
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
              className={clsx(styles.cardHorizontalHover, "flex gap-5 p-4")}
            >
              <div className="relative w-full h-full max-w-[160px] rounded-lg">
                <Image
                  src={item.image}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
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
