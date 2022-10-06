import clsx from "clsx"
import Image from "next/image"
import ButtonLink from "../../../Base/ButtonLink"
import landingStyles from "../landing.module.scss"
import styles from "./birdnest.module.scss"

import birdnestBlog from "/public/images/birdnest-blog.png"
import birdnestDeveloper from "/public/images/birdnest-developer.png"
import birdnestDocumentation from "/public/images/birdnest-documentation.png"

import iconGithub from "/public/images/socials/github.svg"
import iconReddit from "/public/images/socials/reddit.svg"

const BirdNest = () => {
  return (
    <div className={styles.bgBirdNest}>
      <div
        className={clsx(
          landingStyles.section,
          "px-5 py-[60px] flex flex-col",
          "md:px-[120px] md:pt-[120px] md:pb-[160px]"
        )}
      >
        <p
          className={clsx(
            "text-[60px] leading-[68px] tracking-wider text-main text-center font-birdMedium font-semibold",
            "md:text-[80px] md:leading-[80px]"
          )}
        >
          Bird Nest
        </p>
        <p
          className={clsx(
            "text-sm px-3 uppercase tracking-widest font-birdBold font-semibold text-center mt-3",
            "md:text-base"
          )}
        >
          Unlock the door to the Firebird world
        </p>

        <div
          className={clsx(
            "flex justify-between items-center flex-col-reverse gap-3 pl-0 mt-[60px]",
            "md:gap-0 md:flex-row md:pl-10 md:mt-20"
          )}
        >
          <div
            className={clsx(
              "flex flex-col max-w-[440px] justify-center items-center text-center",
              "md:pr-5 md:text-left md:items-start"
            )}
          >
            <p className="text-3xl md:text-4xl font-semibold font-birdMedium">
              The Firebird Blog
            </p>
            <span className="mt-4">
              Where you can discover Firebird-related news, including updates,
              research, analytics, events, partnerships, technological
              knowledge, etc.
            </span>
            <div className="flex mt-7">
              <ButtonLink
                href="https://firebird-techblog.netlify.app/"
                target="_blank"
                className="px-[43px] bg-black text-white"
              >
                Read now
              </ButtonLink>
            </div>
          </div>
          <div
            className="flex max-w-[640px] drop-shadow-xl items-center"
            data-aos="fade-right"
          >
            <Image src={birdnestBlog} alt="" objectFit="contain" />
          </div>
        </div>

        <div
          className={clsx(
            "flex justify-between items-center flex-col-reverse gap-3 pr-0 mt-[60px]",
            "md:gap-0 md:flex-row-reverse md:pr-10 md:mt-20"
          )}
        >
          <div
            className={clsx(
              "flex flex-col max-w-[440px] justify-center items-center text-center md:text-left",
              "md:pl-5 md:items-start"
            )}
          >
            <p className="text-3xl md:text-4xl font-semibold font-birdMedium">
              Developer Hub
            </p>
            <span className="mt-4">
              {`An optimal space is designed for developers. Let's start
              investigating technological architecture and implementing your
              blockchain ideas at Firebird Developer Hub.`}
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
          <div className="flex max-w-[640px] items-center" data-aos="fade-left">
            <Image src={birdnestDeveloper} alt="" objectFit="contain" />
          </div>
        </div>

        <div
          className={clsx(
            "flex justify-between items-center flex-col-reverse gap-3 pl-0 mt-[60px]",
            "md:gap-0 md:flex-row md:pl-10 md:mt-20"
          )}
        >
          <div
            className={clsx(
              "flex flex-col max-w-[440px] justify-center items-center text-center md:text-left",
              "md:pr-5 md:items-start"
            )}
          >
            <p className="text-3xl md:text-4xl font-semibold font-birdMedium">
              Firebird Documentation
            </p>
            <span className="mt-4">
              Dive into the Firebird ecosystem to learn more about the
              platform’s features, solutions, infrastructure, roadmap, etc., and
              understand why we started building Firebird.
            </span>
            <div className="flex mt-7">
              <ButtonLink
                href="https://firebird-1.gitbook.io/firebird-whitepaper/"
                target="_blank"
                className="px-[43px] bg-black text-white"
              >
                Learn More
              </ButtonLink>
            </div>
          </div>
          <div
            className="flex max-w-[640px] items-center"
            data-aos="fade-right"
          >
            <Image src={birdnestDocumentation} alt="" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BirdNest
