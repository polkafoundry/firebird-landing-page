import clsx from "clsx"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import landingStyles from "../landing.module.scss"
import styles from "./roadmap.module.scss"
import iconCheck from "/public/images/icon-check.svg"

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
      "Official Rebrand Announcement",
      "Onboard 10 Projects on Testnet",
      "The 1st Testnet Campaign",
      "Release Mainnet & Onbroad 10 Projects on Mainnet",
      "Swap PKF ERC20 token to native PKF"
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
  const clientRef = useRef<any>()
  const [progressWidth, setProgressWidth] = useState<number>(0)

  useEffect(() => {
    const getProgressWidth = () => {
      let checkedCount =
        roadmapData.map((item) => item.checked).lastIndexOf(true) + 1
      return clientRef.current
        ? (clientRef.current?.clientWidth / 4 + 1) * checkedCount
        : 0
    }
    setProgressWidth(getProgressWidth())

    window.addEventListener("resize", () => {
      console.log(window.innerHeight, window.innerWidth)
      setProgressWidth(getProgressWidth())
    })
  }, [])

  return (
    <div className="w-full bg-black text-white">
      <div
        className={clsx(
          landingStyles.section,
          "px-8 py-[60px]",
          "xs:px-[176px] xs:py-20",
          "md:px-[100px] md:pb-[68px]"
        )}
      >
        <div className="flex flex-col w-full">
          <p className="text-center text-3xl max-w-[980px] mx-auto font-semibold mb-12 md:mt-5 xs:text-4xl">
            Roadmap
          </p>

          <div className="flex w-full relative">
            <span
              className={clsx(styles.progress, "md:block hidden")}
              style={{ width: progressWidth }}
            ></span>
            <ul
              className={styles.roadMapSteps}
              ref={(el) => (clientRef.current = el)}
            >
              {roadmapData.map((roadmap: RoadmapItemTypes) => (
                <li
                  key={roadmap.id}
                  className={clsx(
                    "flex w-auto bg-[#1f1f1f] h-fit rounded-3xl mr-8 border-2 border-[#ffffff1f] relative",
                    roadmap.checked
                      ? `${styles.stepActived} ml-4`
                      : "px-5 mr-8 pt-8 pb-6",
                    "md:mt-0"
                  )}
                >
                  <div className="rounded-3xl overflow-hidden flex flex-1">
                    <ul className="flex flex-col gap-2 list-disc pl-5">
                      {roadmap.details.map((item: string, index: number) => (
                        <li
                          className="text-sm md:text-base"
                          key={index + 100}
                          data-aos="fade-up"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    {roadmap.checked && (
                      <div className="absolute top-3 right-4 ">
                        <Image src={iconCheck} alt="" layout="fixed" />
                      </div>
                    )}
                  </div>
                  <div
                    className={clsx(
                      "flex flex-col text-white absolute justify-between",
                      roadmap.checked ? "-top-[40px]" : "-top-[30px]",
                      "md:h-[44px]",
                      roadmap.checked
                        ? "md:-left-4 md:-top-[86px]"
                        : "md:left-0 md:-top-[88px]"
                    )}
                  >
                    <span
                      className={clsx(
                        "text-14px font-bold font-birdBold",
                        "md:text-bold"
                      )}
                    >
                      {roadmap.label}
                    </span>
                    <span
                      className={clsx(
                        "h-3 w-[2px] bg-[#ffffff52] absolute rotate-90 top-1.5",
                        roadmap.checked ? `-left-[23px]` : "-left-[29px]",
                        "md:relative md:left-0 md:rotate-0"
                      )}
                    ></span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
