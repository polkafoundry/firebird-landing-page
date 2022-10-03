import clsx from "clsx"
import FeatureCard from "../FeatureCard"
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
const WhyFirebird = () => {
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

export default WhyFirebird
