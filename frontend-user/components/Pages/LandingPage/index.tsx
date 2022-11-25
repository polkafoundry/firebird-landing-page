import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { PHOENIX_CUP_URL } from "../../../utils/constants"
import BirdNest from "./BirdNest"
import Community from "./Community"
import Ecosystem from "./Ecosystem"
import styles from "./landing.module.scss"
import Partners from "./Partners"
import Roadmap from "./Roadmap"
import UseCase from "./UseCase"
import WhatIsFirebird from "./WhatIsFirebird"
import WhyFirebird from "./WhyFirebird"

import bannerRebrandXs from "/public/images/banner-phoenixcup-xs.png"
import bannerRebrand from "/public/images/banner-phoenixcup.png"

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
          <Link href={PHOENIX_CUP_URL}>
            <a target="_blank" rel="norefferer">
              <div className="relative hidden xs:block">
                <Image src={bannerRebrand} alt="" />
              </div>
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
