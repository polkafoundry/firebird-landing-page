import clsx from "clsx"
import Image from "next/image"
import styles from "../landing.module.scss"
import imgLock from "/public/images/img-lock.png"

const WhatIsFirebird = () => {
  return (
    <div
      className={clsx(styles.section, "md:px-[100px] pt-20 px-5 xs:px-[60px]")}
    >
      <div
        className={clsx(
          "md:flex-row md:px-20",
          "xs:px-[60px]",
          "flex w-full gap-14 bg-white rounded-[32px] py-20 px-5 flex-col"
        )}
      >
        <div className="flex flex-col text-center md:text-left">
          {" "}
          <span className="text-main uppercase font-semibold font-birdMedium tracking-wider text-sm md:text-base">{`What's Firebird?`}</span>
          <p className="font-semibold max-w-[720px] w-full text-3xl xs:text-5xl md:text-4xl">
            Firebird is the optimized chain that allows{" "}
            <span className="bg-black text-white rounded-md px-1">
              Gaming & Metaverse
            </span>{" "}
            developers to create{" "}
            <span className="bg-main text-white rounded-md px-1">scalable</span>{" "}
            and{" "}
            <span className="bg-main text-white rounded-md px-1">
              user-friendly
            </span>{" "}
            realtime Dapps with cheap costs while never compromising security
          </p>
        </div>

        <Image src={imgLock} alt="" objectFit="contain" />
      </div>
    </div>
  )
}

export default WhatIsFirebird
