import clsx from "clsx"
import Image from "next/image"
import styles from "../landing.module.scss"
import imgLock from "/public/images/img-lock.png"

const WhatIsFirebird = () => {
  return (
    <div className={clsx(styles.section, "px-[100px] pt-20")}>
      <div className="flex w-full gap-14 bg-white rounded-[32px] py-20 px-20">
        <div className="flex flex-col">
          {" "}
          <span className="text-main uppercase font-semibold font-birdMedium tracking-wider">{`What's Firebird?`}</span>
          <p className="text-[40px] leading-[52px] font-semibold max-w-[720px] w-full">
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

        <Image src={imgLock} alt="" />
      </div>
    </div>
  )
}

export default WhatIsFirebird
