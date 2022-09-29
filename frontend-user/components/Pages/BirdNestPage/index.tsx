import React from "react"
import clsx from "clsx"
import styles from "./birdnest.module.scss"
import Image from "next/image"

import birdnestBlog from "/public/images/birdnest-blog.png"
import birdnestDeveloper from "/public/images/birdnest-developer.png"
import birdnestDocumentation from "/public/images/birdnest-documentation.png"

import { SocialItemTypes, socialsData } from "../../../utils/constants"
import iconGithub from "/public/images/socials/github.svg"
import iconReddit from "/public/images/socials/reddit.svg"
import ButtonLink from "../../Base/ButtonLink"

const BirdNestPage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className={clsx(styles.banner, "flex text-white pt-20")}>
        <div
          className={clsx(
            styles.section,
            "flex flex-col px-40 text-center justify-center"
          )}
        >
          <p className="-mt-6 text-[80px] leading-[100px] font-birdMedium font-semibold">
            Bird Nest
          </p>
          <p className="mt-5 text-[28px] font-birdMedium max-w-[640px] mx-auto">
            Unlock the door to the Firebird World
          </p>
        </div>
      </div>

      <div className={clsx("w-full bg-birdLightGray", styles.bgContainer)}>
        <div
          className={clsx(
            styles.section,
            "px-[100px] pt-20 pb-[160px] flex flex-col"
          )}
        >
          <div className="flex justify-between pl-10 bg-white rounded-[32px] pt-[60px]">
            <div className="flex flex-col max-w-[440px] pr-5 justify-center">
              <p className="text-[40px] leading-[52px] font-semibold font-birdMedium">
                The Firebird Blog
              </p>
              <span className="mt-4">
                Where you can discover Firebird-related news, including updates,
                research, analytics, events, partnerships, technological
                knowledge, etc.
              </span>
              <div className="flex mt-7">
                <ButtonLink
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="px-[43px] bg-black text-white"
                >
                  Read now
                </ButtonLink>
              </div>
            </div>
            <div className="flex max-w-[640px] drop-shadow-xl items-center">
              <Image src={birdnestBlog} alt="" objectFit="contain" />
            </div>
          </div>

          <div className="flex flex-row-reverse justify-between px-[60px] py-[60px] mt-8 bg-white rounded-[32px]">
            <div className="flex flex-col max-w-[440px] pl-5 justify-center">
              <p className="text-[40px] leading-[52px] font-semibold font-birdMedium">
                Developer Hub
              </p>
              <span className="mt-4">
                An optimal space is designed for developers. <br /> Let&#39;s
                start investigating technological architecture and implementing
                your blockchain ideas at Firebird Developer Hub.
              </span>
              <div className="flex mt-7 gap-2">
                <ButtonLink
                  href="https://github.com/"
                  target="_blank"
                  className="px-[33px] bg-black text-white"
                >
                  <div className="flex items-center gap-2">
                    <Image src={iconGithub} alt="" width={28} height={28} />
                    Github
                  </div>
                </ButtonLink>
                <ButtonLink
                  href="https://www.reddit.com/"
                  target="_blank"
                  className="px-[33px] bg-black text-white"
                >
                  <div className="flex items-center gap-2">
                    <Image src={iconReddit} alt="" width={28} height={28} />
                    Reddit
                  </div>
                </ButtonLink>
              </div>
            </div>
            <div className="flex max-w-[640px] items-center">
              <Image src={birdnestDeveloper} alt="" objectFit="contain" />
            </div>
          </div>

          <div className="flex justify-between pl-10 mt-40 bg-white rounded-[32px] pt-[60px]">
            <div className="flex flex-col max-w-[440px] pr-5 justify-center">
              <p className="text-[40px] leading-[52px] font-semibold font-birdMedium">
                Firebird Documentation
              </p>
              <span className="mt-4">
                Dive into the Firebird ecosystem to learn more about the
                platform’s features, solutions, infrastructure, roadmap, etc.,
                and understand why we started building Firebird.
              </span>
              <div className="flex mt-7">
                <ButtonLink
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="px-[43px] bg-black text-white"
                >
                  Learn More
                </ButtonLink>
              </div>
            </div>
            <div className="flex max-w-[640px] items-center">
              <Image src={birdnestDocumentation} alt="" objectFit="contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BirdNestPage
