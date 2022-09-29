import clsx from "clsx"
import Image from "next/image"
import ButtonLink from "../../Base/ButtonLink"
import FeatureCard from "./FeatureCard"
import styles from "./landing.module.scss"

import birdnestBlog from "/public/images/birdnest-blog.png"
import birdnestDeveloper from "/public/images/birdnest-developer.png"
import birdnestDocumentation from "/public/images/birdnest-documentation.png"
import imgEcosystem from "/public/images/ecosystem.svg"
import imgBell from "/public/images/img-bell.png"
import imgLock from "/public/images/img-lock.png"
import imgRoadmap from "/public/images/roadmap.svg"

import { SocialItemTypes, socialsData } from "../../../utils/constants"
import iconGithub from "/public/images/socials/github.svg"
import iconReddit from "/public/images/socials/reddit.svg"

export type FeatureTypes = {
  title: string
  image: string
  detail: string
}
const features: Array<FeatureTypes> = [
  {
    title: "Fast and Effective",
    image: "/images/features-fast-effective.png",
    detail:
      "Firebird has the capacity to execute a huge number of transactions per second and guarantee immediate transaction finality at a near-zero fee."
  },
  {
    title: "UX enabling features",
    image: "/images/features-ux.svg",
    detail:
      "Enhance user experience and simplify the Web3 interaction processes with top-notch features: signing key, flexible payer, and assets inheritance."
  },
  {
    title: "EVM Compatible",
    image: "/images/features-evm.svg",
    detail:
      "EVM Compatible enables straightforward migration from Ethereum and BSC, reuse of an abundance of toolchains, including MetaMask, Remix, Hardhat, etc."
  },
  {
    title: "Layer 2 ",
    image: "/images/features-layer-2.png",
    detail:
      "Firebird solves scalability problems by utilizing Layer 2 solutions for lower transaction fees, higher speed, and more security."
  },
  {
    title: "Compliance",
    image: "/images/features-compliance.png",
    detail:
      "Provide an anti-cheat mechanism and security detection to keep players from hacking or cheating and to ensure game fairness. "
  }
]

const usecases: Array<FeatureTypes> = [
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

type PartnerTypes = {
  name: string
  image: string
  uri: string
}

const fakeGamefi: PartnerTypes = {
  image: "/images/gamefi.svg",
  name: "Gamefi.org",
  uri: "https://gamefi.org/"
}
const fakePolygon: PartnerTypes = {
  image: "/images/polygon.svg",
  name: "Polygon",
  uri: "https://polygon.technology/"
}
const partners: Array<PartnerTypes> = []
for (let i = 0; i < 18; i++) {
  partners.push(i % 2 === 0 ? fakeGamefi : fakePolygon)
}

const LandingPage = () => {
  //#region RENDER
  const renderWhatIsFirebird = () => {
    return (
      <div className={clsx(styles.section, "px-[100px] pt-20")}>
        <div className="flex w-full gap-14 bg-white rounded-[32px] py-20 px-20">
          <div className="flex flex-col">
            {" "}
            <span className="text-main uppercase font-semibold font-birdMedium tracking-wider">{`What's Firebird?`}</span>
            <p className="text-[40px] leading-[52px] font-semibold max-w-[720px] w-full">
              Firebird is the optimized chain that allows{" "}
              <span className="bg-black text-white rounded-md px-1">
                Gaming & Metaverse
              </span>{" "}
              developers to create{" "}
              <span className="bg-main text-white rounded-md px-1">
                scalable
              </span>{" "}
              and{" "}
              <span className="bg-main text-white rounded-md px-1">
                user-friendly
              </span>{" "}
              realtime Dapps with cheap costs while never compromising security
            </p>
          </div>

          <Image src={imgLock} alt="" />
        </div>
      </div>
    )
  }

  const renderWhyIsFirebird = () => {
    return (
      <div className={clsx(styles.section, "px-[100px] pt-24 pb-[140px]")}>
        <div className="flex flex-col w-full">
          <span className="text-main uppercase font-semibold font-birdMedium text-center tracking-wider">
            Why Firebird?
          </span>
          <p className="text-center text-[40px] leading-[52px] max-w-[980px] mx-auto font-semibold mt-2">
            Overcome challenges in blockchain gaming with powerful and efficient
            features
          </p>

          <div className="flex flex-wrap justify-center gap-[19px] mt-7">
            {features.map((item: FeatureTypes, index: number) => (
              <FeatureCard key={index} feature={item} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  const renderEcosystem = () => {
    return (
      <div className="w-full bg-black text-white">
        <div className={clsx(styles.section, "px-[100px] py-20")}>
          <div className="flex flex-col w-full">
            <span className="text-main uppercase font-semibold font-birdMedium text-center tracking-wider">
              Join the Firebird ecosystem
            </span>
            <p className="text-center text-[40px] leading-[52px] max-w-[980px] mx-auto font-semibold mt-2 mb-10">
              {`Grow your project using the Firebird ecosystem's end-to-end
              infrastructure.`}
            </p>

            <Image src={imgEcosystem} alt="" />
          </div>
        </div>
      </div>
    )
  }

  const renderUseCases = () => {
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
            {usecases.map((item: FeatureTypes, index: number) => (
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

  const renderBirdNest = () => {
    return (
      <div className="w-full bg-white">
        <div
          className={clsx(
            styles.section,
            "px-[120px] pt-[120px] pb-[160px] flex flex-col"
          )}
        >
          <p className="text-[80px] leading-[80px] tracking-wider text-main text-center font-birdMedium font-semibold">
            Bird Nest
          </p>
          <p className="uppercase tracking-widest font-birdBold font-semibold text-center mt-3">
            Unlock the door to the Firebird world
          </p>

          <div className="flex justify-between pl-10 mt-20">
            <div className="flex flex-col max-w-[420px] pt-10">
              <p className="text-[40px] leading-[52px] font-semibold font-birdMedium">
                The Firebird Blog
              </p>
              <span className="mt-4">
                Where you can discover Firebird-related news, including updates,
                research, analytics, events, partnerships, technological
                knowledge, etc.
              </span>
              <div className="flex mt-7">
                <ButtonLink
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="px-[43px] bg-black text-white"
                >
                  Read now
                </ButtonLink>
              </div>
            </div>
            <div className="flex max-w-[640px] drop-shadow-xl">
              <Image src={birdnestBlog} alt="" />
            </div>
          </div>

          <div className="flex flex-row-reverse justify-between pr-10 mt-20">
            <div className="flex flex-col max-w-[420px] pt-10">
              <p className="text-[40px] leading-[52px] font-semibold font-birdMedium">
                Developer Hub
              </p>
              <span className="mt-4">
                {`An optimal space is designed for developers. Let's start
                investigating technological architecture and implementing your
                blockchain ideas at Firebird Developer Hub.`}
              </span>
              <div className="flex mt-7 gap-2">
                <ButtonLink
                  href="https://github.com/"
                  target="_blank"
                  className="px-[33px] bg-black text-white"
                >
                  <div className="flex items-center gap-2">
                    <Image src={iconGithub} alt="" width={28} height={28} />
                    Github
                  </div>
                </ButtonLink>
                <ButtonLink
                  href="https://www.reddit.com/"
                  target="_blank"
                  className="px-[33px] bg-black text-white"
                >
                  <div className="flex items-center gap-2">
                    <Image src={iconReddit} alt="" width={28} height={28} />
                    Reddit
                  </div>
                </ButtonLink>
              </div>
            </div>
            <div className="flex max-w-[640px]">
              <Image src={birdnestDeveloper} alt="" />
            </div>
          </div>

          <div className="flex justify-between pl-10 mt-40">
            <div className="flex flex-col max-w-[420px] pt-10">
              <p className="text-[40px] leading-[52px] font-semibold font-birdMedium">
                Firebird Documentation
              </p>
              <span className="mt-4">
                Dive into the Firebird ecosystem to learn more about the
                platform’s features, solutions, infrastructure, roadmap, etc.,
                and understand why we started building Firebird.
              </span>
              <div className="flex mt-7">
                <ButtonLink
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="px-[43px] bg-black text-white"
                >
                  Learn More
                </ButtonLink>
              </div>
            </div>
            <div className="flex max-w-[640px]">
              <Image src={birdnestDocumentation} alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderRoadmap = () => {
    return (
      <div className="w-full bg-black text-white">
        <div className={clsx(styles.section, "px-[100px] pt-20 pb-[68px]")}>
          <div className="flex flex-col w-full">
            <p className="text-center text-[40px] leading-[52px] max-w-[980px] mx-auto font-semibold mt-5 mb-12">
              Roadmap
            </p>

            <Image src={imgRoadmap} alt="" />
          </div>
        </div>
      </div>
    )
  }

  const renderBacked = () => {
    return (
      <div className={clsx(styles.section, "px-[138px] pt-20")}>
        <div className="flex flex-col justify-center">
          <p className="text-[40px] leading-[52px] font-semibold text-center w-full">
            Backed by
          </p>
          <a
            href="https://icetea.io/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col px-12 pt-10 pb-7 mt-7 bg-white w-fit mx-auto rounded-[32px] justify-center"
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
          </a>

          <p className="mt-20 text-center font-semibold text-[40px] leading-[52px] max-w-[980px] mx-auto">
            <span className="bg-main text-white px-1 rounded-md">
              Our partners
            </span>{" "}
            focus on long-term development to provide the best user experience
            and benefits.
          </p>

          <div className="w-full flex flex-wrap gap-3 mt-7">
            {partners.map((item: PartnerTypes, index: number) => (
              <a
                key={index + 1000}
                href={item.uri}
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-[32px] w-[184px] flex flex-col justify-center items-center pt-9 pb-7"
              >
                <div className="relative max-w-[80px]">
                  <Image
                    src={item.image}
                    alt=""
                    width={80}
                    height={80}
                    layout="fixed"
                  />
                </div>
                <p className="font-semibold mt-1">{item.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const renderCommunity = () => {
    return (
      <div className={clsx(styles.section, "px-[100px] pt-20 pb-20")}>
        <div className="flex gap-5 w-full text-white rounded-[20px] pl-20 pr-[60px] pt-16 pb-11 bg-[url('/images/bg-community.svg')] bg-no-repeat bg-cover">
          <div className="flex flex-col max-w-[480px]">
            <p className="text-[44px] leading-[54px] font-semibold">
              Find your place in the Firebird Community
            </p>
            <div className="relative mt-10">
              <Image src={imgBell} alt="" />
            </div>
          </div>

          <div className="flex flex-col pt-3">
            <p className="text-lg">
              Need more information about Firebird? Follow us on Firebird’s
              official groups and channels so you won’t miss anything!
            </p>

            <div className="grid grid-cols-2 gap-3 text-white mt-10">
              {socialsData.map((item: SocialItemTypes, index: number) => (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black rounded-xl py-3 px-7 flex items-center gap-3"
                  key={index + 2000}
                >
                  <Image src={item.img} alt="" width={40} height={40} />
                  <div className="flex flex-col w-full">
                    <span className="">{item.label}</span>
                    <span className=" text-[22px] leading-[32px] font-semibold">
                      {item.username}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  //#endregion RENDER

  return (
    <div className="flex flex-col w-full">
      <div className={clsx(styles.banner, "flex text-white pt-20")}>
        <div
          className={clsx(
            styles.section,
            "flex flex-col px-40 text-center justify-center"
          )}
        >
          <p className="-mt-20 text-[140px] leading-[140px] font-birdMedium font-semibold">
            Firebird
          </p>
          <p className="mt-5 text-[28px] font-birdMedium max-w-[640px] mx-auto">
            Enhance your next hassle-free and user-friendly NFT gaming &
            metaverse with Firebird
          </p>
        </div>
      </div>

      {renderWhatIsFirebird()}

      {renderWhyIsFirebird()}

      {renderEcosystem()}

      {renderUseCases()}

      {renderBirdNest()}

      {renderRoadmap()}

      {renderBacked()}

      {renderCommunity()}
    </div>
  )
}

export default LandingPage
