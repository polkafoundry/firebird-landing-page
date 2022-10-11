import clsx from "clsx"
import Image from "next/image"
import React from "react"
import { SocialItemTypes, socialsData } from "../../../utils/constants"
import styles from "./styles.module.scss"

import imgBell from "/public/images/img-bell.png"

const FirebirdCommunity = () => {
  return (
    <div
      className={clsx(
        "flex flex-col w-full text-white rounded-[20px] pb-10 pt-[60px] px-5 bg-[url('/images/bg-community-landing-xs.svg')] bg-no-repeat bg-cover bg-center",
        "xs:px-[60px] xs:bg-center",
        "lg:gap-5 lg:flex-row md:pl-20 md:pr-[60px] md:pt-16 md:pb-11 md:bg-[url('/images/bg-community-landing.svg')] md:bg-no-repeat md:bg-cover md:bg-inherit"
      )}
    >
      <div
        className={clsx(
          "flex flex-col-reverse max-w-[480px] items-center text-center mx-auto",
          "lg:flex-col lg:items-start lg:text-left lg:mx-0"
        )}
      >
        <p className="text-3xl xs:text-5xl md:text-[44px] md:leading-[54px] font-semibold">
          Find your place in the Firebird Community
        </p>
        <div
          className="relative block sm:hidden lg:block md:mt-10"
          data-aos="zoom-in"
        >
          <Image src={imgBell} alt="" />
        </div>
      </div>

      <div className="flex flex-col pt-3">
        <p className="text-sm xs:text-22px md:text-lg text-center md:text-left">
          {`Need more information about Firebird? Follow us on official groups and channels not to miss out on anything!`}
        </p>

        <div
          className={clsx(
            "grid grid-cols-1 gap-2 text-white mt-10",
            "sm:grid-cols-2 sm:gap-3"
          )}
        >
          {socialsData.map((item: SocialItemTypes, index: number) => (
            <a
              href={item.username ? item.url : "#"}
              target="_blank"
              rel="noreferrer"
              className={clsx(
                styles.cardCommunityHover,
                "rounded-xl py-3 px-7 flex items-center gap-3",
                { "pointer-events-none": !item.username }
              )}
              key={index + 2000}
            >
              <div className="relative w-10 h-10">
                <Image src={item.img} alt="" layout="fixed" />
              </div>
              <div className="flex flex-col w-full">
                <span className="text-sm md:text-base">{item.label}</span>
                <span className="text-lg md:text-[22px] md:leading-[32px] font-semibold">
                  {item.username || "Coming soon"}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FirebirdCommunity
