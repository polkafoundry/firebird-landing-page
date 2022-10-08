import clsx from "clsx"
import Image from "next/image"
import styles from "./ecosystem.module.scss"
import iconFirebird from "/public/images/icon-firebird.png"

type EcosystemItemTypes = {
  id: string
  label: string
  title?: string
  image?: any
  description?: string
}

const ecosystemData: Array<EcosystemItemTypes> = [
  {
    id: "1",
    label: "Preparation"
  },
  {
    id: "2",
    label: "Blockchain & Dapp Development",
    image: iconFirebird,
    title: "Firebird - Blockchain & Dapp Development",
    description:
      "The Firebird platform offers a basic foundation for a blockchain project to begin building and working on. As a result, it has a key place in the product life cycle and performs the most crucial function in the Firebird ecosystem."
  },
  {
    id: "3",
    label: "Token sales"
  },
  {
    id: "4",
    label: "NFT sales"
  },
  {
    id: "5",
    label: "Game launch"
  },
  {
    id: "6",
    label: "Player attraction"
  },
  {
    id: "7",
    label: "Metaverse experiences"
  }
]

const boxStyles = {
  md: "flex w-fit bg-[#1f1f1f] h-fit rounded-3xl border-2 border-[#ffffff1f] relative text-center",
  sm: ""
}

const Ecosystem = () => {
  return (
    <div className="w-full bg-black text-white">
      <div
        className={clsx(
          styles.section,
          "px-10 py-[60px] lg:px-[100px] xs:py-20"
        )}
      >
        <div className="flex flex-col w-full md:px-[60px]">
          <span className="text-main uppercase font-semibold font-birdMedium text-center tracking-wider text-sm md:text-base">
            Join the Firebird ecosystem
          </span>
          <p
            className={clsx(
              "text-center text-3xl md:text-4xl max-w-[980px] mx-auto font-semibold mt-2 mb-5",
              "xs:mt-3 xs:mb-10",
              "md:mt-2"
            )}
          >
            {`Grow your project using the Firebird ecosystem's end-to-end
            infrastructure.`}
          </p>

          <div className={clsx("flex flex-row", "md:hidden")}>
            <div className={clsx(styles.progress, "w-2")}></div>
            <ul
              className={clsx(
                styles.roadMapSteps,
                "flex flex-1 flex-col gap-5"
              )}
            >
              {ecosystemData.map((item, index) => (
                <li key={item.id} className="xs:relative">
                  <div
                    className={clsx(
                      boxStyles.md,
                      index === 1
                        ? `${styles.stepActived} ml-[27px] mt-3`
                        : "py-5 px-4 ml-3"
                    )}
                  >
                    {index === 1 ? (
                      <div className="flex flex-col items-center rounded-3xl xs:max-w-[260px]">
                        <div className="w-[101px]">
                          <Image src={item.image} layout="responsive" alt="" />
                        </div>
                        <span className={clsx("mt-2 text-16px font-semibold")}>
                          {item.label}
                        </span>
                        <span
                          className={clsx(
                            styles.connectLine,
                            "h-3 w-[2px] bg-white opacity-[0.2] top-16 left-[-9px] rotate-90"
                          )}
                        ></span>
                      </div>
                    ) : (
                      <div
                        className={clsx(
                          "flex flex-col text-white justify-between"
                        )}
                      >
                        <span className="text-base font-semibold ">
                          {item.label}
                        </span>
                        <span
                          className={clsx(
                            styles.connectLine,
                            "h-3 w-[2px] bg-white opacity-[0.2] left-[-9px] rotate-90"
                          )}
                        ></span>
                      </div>
                    )}
                  </div>
                  {index === 1 && (
                    <p
                      className={clsx(
                        "ml-10 mt-3 text-sm left-[275px]",
                        "xs:text-base sm:text-20px lg:text- xs:absolute xs:top-0"
                      )}
                    >
                      {item.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className={clsx("hidden", "md:flex md:flex-col")}>
            <ul
              className={clsx(styles.roadMapSteps, "flex flex-row items-end")}
            >
              {ecosystemData
                .filter((item, index) => index % 2 == 0)
                .map((item, index) => (
                  <li key={item.id} className="flex flex-1 justify-center">
                    <div
                      className={clsx(boxStyles.md, "py-4 px-7 max-w-[156px]")}
                    >
                      <div className={clsx("flex flex-col text-white")}>
                        <span className="text-base font-semibold">
                          {item.label}
                        </span>
                        <span
                          className={clsx(
                            styles.connectLine,
                            "h-3 w-[2px] bg-white opacity-[0.2]"
                          )}
                        ></span>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            <div
              className={clsx(styles.progress, "w-2 mt-3", "md:w-full md:h-2")}
            ></div>
            <ul
              className={clsx(
                styles.roadMapSteps,
                "flex flex-1 flex-row justify-center items-start mt-3 px-20 relative"
              )}
            >
              {ecosystemData
                .filter((item, index) => index % 2 == 1)
                .map((item, index) => (
                  <li
                    key={item.id}
                    className="flex flex-1 justify-center relative"
                  >
                    <div
                      className={clsx(
                        boxStyles.md,
                        index === 0
                          ? `${styles.stepActived} mt-[60px]`
                          : "py-4 px-7 max-w-[156px]",
                        ""
                      )}
                    >
                      {index === 0 ? (
                        <div className="flex flex-col items-center rounded-3xl">
                          <div className="w-[151px]">
                            <Image
                              src={item.image}
                              layout="responsive"
                              alt=""
                            />
                          </div>
                          <span className="mt-2 text-16px font-semibold">
                            {item.label}
                          </span>
                          <span
                            className={clsx(
                              styles.connectLineBelow,
                              "h-[61px] w-[2px] bg-white opacity-[0.2]"
                            )}
                          ></span>
                        </div>
                      ) : (
                        <div className={clsx("flex flex-col text-white")}>
                          <span className="text-base font-semibold">
                            {item.label}
                          </span>
                          <span
                            className={clsx(
                              styles.connectLineBelow,
                              "h-3 w-[2px] bg-white opacity-[0.2]"
                            )}
                          ></span>
                        </div>
                      )}
                    </div>
                    {index == 0 && (
                      <div
                        className={clsx(
                          styles.activeTitle,
                          "absolute bottom-0 w-[200%] lg:bottom-6"
                        )}
                      >
                        <p className="text-2xl font-semibold lg:text-3xl">
                          {item.title}
                        </p>
                        <p className="text-base mt-2">{item.description}</p>
                      </div>
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
