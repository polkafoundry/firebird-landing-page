import clsx from "clsx"
import Image from "next/image"
import styles from "../landing.module.scss"
import imgLock from "/public/images/img-lock.png"

const WhatIsFirebird = () => {
  return (
    <div
      className={clsx(
        styles.section,
        "pt-10 px-5",
        "xs:pt-[60px] xs:px-[60px]",
        "md:pt-20 md:px-[100px]"
      )}
    >
      <div
        className={clsx(
          "md:flex-row md:px-20",
          "xs:px-[60px] xs:py-20",
          "flex w-full gap-14 bg-white rounded-[32px] py-10 px-5 flex-col"
        )}
      >
        <div className="flex flex-col text-center gap-2 xs:gap-4 md:text-left md:gap-2">
          {" "}
          <span className="text-main uppercase font-semibold font-birdMedium tracking-wider text-sm md:text-base">{`What's Firebird?`}</span>
          <p
            className="font-semibold max-w-[720px] w-full text-3xl sm:text-5xl xs:text-4xl"
            data-aos="fade-up"
          >
            {`Firebird's optimized chain allows `}
            <span className="bg-black text-white rounded-md px-1">
              GameFi & Metaverse
            </span>{" "}
            developers to build{" "}
            <span className="bg-main text-white rounded-md px-1">scalable</span>{" "}
            and{" "}
            <span className="bg-main text-white rounded-md px-1">
              intuitive
            </span>{" "}
            Dapps with near-zero costs while never compromising your security
          </p>
        </div>

        <Image src={imgLock} alt="" objectFit="contain" />
      </div>
    </div>
  )
}

export default WhatIsFirebird
