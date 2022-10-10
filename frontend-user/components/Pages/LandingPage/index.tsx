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
            className={clsx(
              "mt-5 text-lg font-birdMedium mx-auto",
              "xs:mt-8",
              "md:text-3xl md:mt-5"
            )}
            data-aos="fade-up"
          >
            Build scalable and intuitive Web3 games with Firebird
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
