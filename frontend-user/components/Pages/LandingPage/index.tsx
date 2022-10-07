import clsx from "clsx"
import Backed from "./Backed"
import BirdNest from "./BirdNest"
import Community from "./Community"
import Ecosystem from "./Ecosystem"
import styles from "./landing.module.scss"
import Roadmap from "./Roadmap"
import UseCase from "./UseCase"
import WhatIsFirebird from "./WhatIsFirebird"
import WhyFirebird from "./WhyFirebird"

const LandingPage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className={clsx(styles.banner, "flex text-white pt-20")}>
        <div
          className={clsx(
            styles.section,
            "flex flex-col px-8 md:px-40 text-center md:justify-center"
          )}
        >
          <p
            className={clsx(
              "md:-mt-20 md:text-[140px] md:leading-[140px]",
              "mt-32 text-6xl font-birdMedium font-semibold"
            )}
          >
            Firebird
          </p>
          <p
            className="mt-5 text-lg md:text-3xl font-birdMedium max-w-[640px] mx-auto"
            data-aos="fade-up"
          >
            Develop/ Build the next hassle-free and user-friendly NFT gaming &
            metaverse with Firebird.
          </p>
        </div>
      </div>

      <WhatIsFirebird />

      <WhyFirebird />

      <Ecosystem />

      <UseCase />

      <BirdNest />

      <Roadmap />

      <Backed />

      <Community />
    </div>
  )
}

export default LandingPage
