import clsx from "clsx"
import Image from "next/image"
import React from "react"
import { SocialItemTypes, socialsData } from "../../../utils/constants"
import styles from "./styles.module.scss"

import imgBell from "/public/images/img-bell.png"

const FirebirdCommunity = () => {
  return (
    <div className="flex gap-5 w-full text-white rounded-[20px] pl-20 pr-[60px] pt-16 pb-11 bg-[url('/images/bg-community-landing.svg')] bg-no-repeat bg-cover">
      <div className="flex flex-col max-w-[480px]">
        <p className="text-[44px] leading-[54px] font-semibold">
          Find your place in the Firebird Community
        </p>
        <div className="relative mt-10" data-aos="zoom-in">
          <Image src={imgBell} alt="" />
        </div>
      </div>

      <div className="flex flex-col pt-3">
        <p className="text-lg">
          {`Need more information about Firebird? Follow us on Firebird’s official
          groups and channels so you won’t miss anything!`}
        </p>

        <div className="grid grid-cols-2 gap-3 text-white mt-10">
          {socialsData.map((item: SocialItemTypes, index: number) => (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className={clsx(
                styles.cardCommunityHover,
                "rounded-xl py-3 px-7 flex items-center gap-3"
              )}
              key={index + 2000}
            >
              <Image src={item.img} alt="" width={40} height={40} />
              <div className="flex flex-col w-full">
                <span className="">{item.label}</span>
                <span className=" text-[22px] leading-[32px] font-semibold">
                  {item.username}
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
