import clsx from "clsx"
import Image from "next/image"
import styles from "../landing.module.scss"

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
      "Firebird has the capacity to execute a huge number of transactions per second and guarantee immediate transaction finality, cost-effectively."
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
      "Firebird solves scalability problems by utilizing Layer 2 solutions for lower transaction fees, higher speed, and enhanced/greater security."
  },
  {
    title: "Compliance",
    image: "/images/features-compliance.png",
    detail:
      "Provide an anti-cheat mechanism and security detection to keep players from hacking or cheating and to ensure game fairness."
  }
]

const WhyFirebird = () => {
  return (
    <div
      className={clsx(
        styles.section,
        "px-5 pt-[60px] pb-[140px]",
        "xs:pt-20 xs:px-[60px]",
        "md:pt-24 md:px-[58px]"
      )}
    >
      <div className="flex flex-col w-full">
        <span className="text-main uppercase font-semibold font-birdMedium text-center tracking-wider text-sm xs:text-xl md:text-base">
          Why Firebird?
        </span>
        <p
          className={clsx(
            "md:text-4xl",
            "xs:text-5xl",
            "text-3xl text-center px-3 max-w-[980px] mx-auto font-semibold mt-2"
          )}
        >
          Overcome challenges in building and playing blockchain gaming with
          powerful and efficient features
        </p>

        <div
          className={clsx(
            "flex flex-wrap justify-center gap-3 mt-5",
            "xs:mt-10 xs:gap-4",
            "md:mt-7 md:gap-[19px]"
          )}
        >
          {features.map((feature: FeatureTypes, index: number) => (
            <div
              key={index}
              className={clsx(
                styles.cardHover,
                "flex max-w-full w-full flex-col py-8 gap-3 items-start px-8",
                "md:flex-col md:max-w-[374px] md:pb-[52px] md:items-start md:pt-8 md:gap-0",
                "sm:flex-row xs:pb-[48px] xs:pt-[60px] xs:gap-10 sm:items-center xs:px-10"
              )}
              data-aos="zoom-in"
            >
              <div
                className={clsx(
                  "md:w-[140px] md:h-[140px]",
                  "xs:w-[180px] xs:h-[180px]",
                  "relative w-[100px] h-[100px]"
                )}
              >
                <Image
                  src={feature.image}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="flex flex-col flex-1">
                <span className="md:mt-8 text-xl font-semibold xs:text-4xl md:text-3xl">
                  {feature.title}
                </span>
                <span className="mt-3 text-sm xs:text-22px md:text-base">
                  {feature.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyFirebird
