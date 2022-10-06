import clsx from "clsx"
import Image from "next/image"
import styles from "../landing.module.scss"
import imgRoadmap from "/public/images/roadmap.svg"
import imgRoadmapXs from "/public/images/roadmap-xs.svg"

type RoadmapItemTypes = {
  id: string
  label: string
  details: Array<string>
  checked: boolean
}

const roadmapData: Array<RoadmapItemTypes> = [
  {
    id: "1",
    label: "Q3/2022",
    checked: new Date().getTime() > new Date("9/30/2022").getTime(),
    details: ["Chain Research", "Build Tesnet"]
  },
  {
    id: "2",
    label: "Q4/2022",
    checked: new Date().getTime() > new Date("12/31/2022").getTime(),
    details: [
      "Onboard 10 Projects on Testnet",
      "Testnet Campaign",
      "Release Mainnet & Onbroad 10 Projects",
      "Swap PKF ERC20 token to native PKF",
      "Validator Campaign",
      "Rebrand",
      "UX enabling features"
    ]
  },
  {
    id: "3",
    label: "2023",
    checked: new Date().getTime() > new Date("12/31/2023").getTime(),
    details: [
      "Onboard 50+ projects",
      "Validator Campaign",
      "UX enabling features",
      "Governance Portal",
      "Performance Enhancement"
    ]
  },
  {
    id: "4",
    label: "2024",
    checked: new Date().getTime() > new Date("12/31/2024").getTime(),
    details: [
      "Onboard 100+ projects ",
      "Layer 2 on Zk Rollup",
      "Metaverse Package",
      "Secure Service Layer",
      "Developer Engagement Programs"
    ]
  }
]

const Roadmap = () => {
  // console.log(roadmapData)

  return (
    <div className="w-full bg-black text-white">
      <div className={clsx(styles.section, "px-[100px] pt-20 pb-[68px]")}>
        <div className="flex flex-col w-full">
          <p className="text-center text-3xl md:text-4xl max-w-[980px] mx-auto font-semibold mt-5 mb-12">
            Roadmap
          </p>

          <div className="flex w-full">
            <ul className="">
              {roadmapData.map((item: RoadmapItemTypes) => (
                <li key={item.id}></li>
              ))}
            </ul>
          </div>

          <div className="relative hidden md:block">
            <Image src={imgRoadmap} alt="" />
          </div>
          <div className="relative md:hidden flex justify-center">
            <Image src={imgRoadmapXs} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
