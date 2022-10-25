import clsx from "clsx"
import Partners from "./Partners"
import BirdNest from "./BirdNest"
import Community from "./Community"
import Ecosystem from "./Ecosystem"
import styles from "./landing.module.scss"
import Roadmap from "./Roadmap"
import UseCase from "./UseCase"
import WhatIsFirebird from "./WhatIsFirebird"
import WhyFirebird from "./WhyFirebird"
import Image from "next/image"
import Link from "next/link"

import bannerRebrandXs from "/public/images/banner-rebrand-xs.png"
import bannerBell from "/public/images/banner-bell.png"
import bannerSubBg from "/public/images/banner-rebrand-sub.png"

const REBRAND_INFO_URL =
  "https://medium.com/polkafoundry/polkafoundry-rebrands-as-firebird-game-dedicated-web2-friendly-high-performance-blockchain-ff7972c3e2f6"

const LandingPage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className={clsx(styles.banner, "flex text-white pt-20")}>
        <div
          className={clsx(
            styles.section,
            "flex flex-col px-8 md:px-[120px] lg:px-40 text-center"
          )}
        >
          <div
            className={clsx(styles.rebrand, "py-7 px-5 md:px-10 lg:px-[90px]")}
          >
            <div className="relative pt-2">
              <Image src={bannerBell} alt="" />
            </div>
            <div
              className={clsx(
                "absolute top-[15%] right-0 z-0",
                "xl:right-[5%]"
              )}
            >
              <Image src={bannerSubBg} alt="" />
            </div>

            <div
              className={clsx(
                "flex flex-col text-left z-[1] max-w-[50%]",
                "lg:max-w-[60%]"
              )}
            >
              <span className="uppercase text-xl lg:text-2xl font-semibold">
                PolkaFoundry has rebranded as Firebird
              </span>
              <p className="m-0">
                See more information{" "}
                <a
                  href={REBRAND_INFO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-main font-semibold"
                >
                  HERE
                </a>
              </p>
            </div>
          </div>

          <Link href={REBRAND_INFO_URL}>
            <a target="_blank" rel="norefferer">
              <div className="relative xs:hidden">
                <Image src={bannerRebrandXs} alt="" />
              </div>
            </a>
          </Link>

          <p
            className={clsx(
              "md:text-[140px] md:leading-[140px]",
              "mt-[5%] text-6xl font-birdMedium font-semibold"
            )}
          >
            Firebird
          </p>
          <p
            className={clsx(
              "mt-5 text-lg font-birdMedium mx-auto",
              "xs:mt-8",
              "md:text-3xl md:mt-5"
            )}
            data-aos="fade-up"
          >
            Build scalable and frictionless Web3 games with Firebird
          </p>
        </div>
      </div>

      <WhatIsFirebird />

      <WhyFirebird />

      <Ecosystem />

      <UseCase />

      <BirdNest />

      <Roadmap />

      <Partners />

      <Community />
    </div>
  )
}

export default LandingPage
