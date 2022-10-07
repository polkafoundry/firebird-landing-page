import clsx from "clsx"
import Image from "next/image"
import styles from "./ecosystem.module.scss"
import iconFirebird from "/public/images/icon-firebird.png"

type EcosystemItemTypes = {
  id: string
  label: string
  details?: Array<string>
  checked: boolean
  image?: any
  description?: string
}

const ecosystemData: Array<EcosystemItemTypes> = [
  {
    id: "1",
    label: "Preparation",
    checked: new Date().getTime() > new Date("9/30/2022").getTime(),
    details: ["Chain Research", "Build Tesnet"]
  },
  {
    id: "2",
    label: "Blockchain & Dapp Development",
    image: iconFirebird,
    checked: new Date().getTime() > new Date("12/31/2022").getTime(),
    description:
      "The Firebird platform offers a basic foundation for a blockchain project to begin building and working on. As a result, it has a key place in the product life cycle and performs the most crucial function in the Firebird ecosystem."
  },
  {
    id: "3",
    label: "Token sales",
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
    id: "4",
    label: "NFT sales",
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
    id: "5",
    label: "NFT sales",
    checked: new Date().getTime() > new Date("12/31/2024").getTime(),
    details: [
      "Onboard 100+ projects ",
      "Layer 2 on Zk Rollup",
      "Metaverse Package",
      "Secure Service Layer",
      "Developer Engagement Programs"
    ]
  },
  {
    id: "6",
    label: "Player attraction",
    checked: new Date().getTime() > new Date("12/31/2024").getTime(),
    details: [
      "Onboard 100+ projects ",
      "Layer 2 on Zk Rollup",
      "Metaverse Package",
      "Secure Service Layer",
      "Developer Engagement Programs"
    ]
  },
  {
    id: "7",
    label: "Metaverse experiences",
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

const Ecosystem = () => {
  // const clientRef = useRef<any>()

  // const [progressWidth, setProgressWidth] = useState<number>(0)

  // useEffect(() => {
  //   const getProgressWidth = () => {
  //     return clientRef.current
  //       ? (clientRef.current?.clientWidth / 4 + 1) * 2
  //       : 0
  //   }
  //   setProgressWidth(getProgressWidth())

  //   window.addEventListener("resize", () => {
  //     console.log(window.innerHeight, window.innerWidth)
  //     setProgressWidth(getProgressWidth())
  //   })
  // }, [])

  return (
    <div className="w-full bg-black text-white">
      <div
        className={clsx(
          styles.section,
          "px-10 py-[60px] md:px-[100px] md:py-20"
        )}
      >
        <div className="flex flex-col w-full">
          <span className="text-main uppercase font-semibold font-birdMedium text-center tracking-wider text-sm md:text-base">
            Join the Firebird ecosystem
          </span>
          <p className="text-center text-3xl md:text-4xl max-w-[980px] mx-auto font-semibold mt-2 mb-5 md:mb-10">
            Grow your project using the Firebird ecosystem's end-to-end
            infrastructure.
          </p>

          <div className="flex flex-row">
            <div className={styles.progress}></div>
            <ul
              className={clsx(
                styles.roadMapSteps,
                "flex flex-1 flex-col gap-5"
              )}
            >
              {ecosystemData.map((item, index) => (
                <li key={item.id}>
                  <div
                    className={clsx(
                      index === 1
                        ? `${styles.stepActived} ml-[27px] mt-3`
                        : "py-5 px-4 ml-5",
                      "flex w-fit bg-[#1f1f1f] h-fit rounded-3xl border-2 border-[#ffffff1f] relative"
                    )}
                  >
                    {index === 1 ? (
                      <div className="flex flex-col items-center rounded-3xl">
                        <Image src={item.image} alt="" />
                        <span className="mt-2 text-16px font-semibold">
                          {item.label}
                        </span>
                        <span
                          className={clsx(
                            styles.connectLine,
                            "h-3 w-[2px] bg-white opacity-[0.2] top-16 left-[-9px]"
                          )}
                        ></span>
                      </div>
                    ) : (
                      <div
                        className={clsx(
                          "flex flex-col text-white justify-between",
                          "md:-top-[82px] md:left-0 md:h-[44px]"
                        )}
                      >
                        <span className="text-base font-bold font-birdBold">
                          {item.label}
                        </span>
                        <span
                          className={clsx(
                            styles.connectLine,
                            "h-5 w-[2px] bg-white opacity-[0.2] left-[-13px]"
                          )}
                        ></span>
                      </div>
                    )}
                  </div>
                  {index === 1 && (
                    <p className="ml-10 mt-3 text-sm">{item.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecosystem
