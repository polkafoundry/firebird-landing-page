import clsx from "clsx"
import Image from "next/image"
import styles from "./birdnest.module.scss"

import birdnestBlog from "/public/images/birdnest-blog.png"
import birdnestDeveloper from "/public/images/birdnest-developer.png"
import birdnestDocumentation from "/public/images/birdnest-documentation.png"

import ButtonLink from "../../Base/ButtonLink"
import iconGithub from "/public/images/socials/github.svg"
import iconReddit from "/public/images/socials/reddit.svg"

const BirdNestPage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className={clsx(styles.banner, "flex text-white md:pt-20")}>
        <div
          className={clsx(
            styles.section,
            "flex flex-col px-8 text-center justify-center",
            "md:px-40"
          )}
        >
          <p className="md:-mt-6 text-6xl md:text-7xl font-birdMedium font-semibold">
            Bird Nest
          </p>
          <p className="mt-5 text-3xl font-birdMedium max-w-[640px] mx-auto">
            Unlock the door to the Firebird World
          </p>
        </div>
      </div>

      <div className={clsx("w-full bg-birdLightGray", styles.bgContainer)}>
        <div
          className={clsx(
            styles.section,
            "p-5 pb-[60px] flex flex-col",
            "md:px-[100px] md:pt-20 md:pb-10"
          )}
        >
          <div
            className={clsx(
              "flex flex-col-reverse justify-between bg-white rounded-[32px] px-5 py-8",
              "md:flex-row md:pl-10 md:pt-[60px] md:pb-5"
            )}
          >
            <div
              className={clsx(
                "flex flex-col max-w-[440px] justify-center items-center text-center",
                "md:pr-5 md:text-left md:items-start"
              )}
            >
              <p className="text-3xl mt-3 md:mt-0 md:text-4xl font-semibold font-birdMedium">
                The Firebird Blog
              </p>
              <span className="mt-4 text-sm md:text-base">
                Where you can discover Firebird-related news, including updates,
                research, analytics, events, partnerships, technological
                knowledge, etc.
              </span>
              <div className="flex mt-3 md:mt-7">
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
              "flex flex-col-reverse justify-between px-5 py-8 mt-5 bg-white rounded-[32px]",
              "md:flex-row-reverse md:px-[60px] md:py-[60px] md:mt-8"
            )}
          >
            <div
              className={clsx(
                "flex flex-col max-w-[440px] justify-center items-center text-center",
                "md:pl-5 md:text-left md:items-start"
              )}
            >
              <p className="text-3xl mt-3 md:mt-0 md:text-4xl font-semibold font-birdMedium">
                Developer Hub
              </p>
              <span className="mt-4 text-sm md:text-base">
                An optimal space is designed for developers. <br /> Let&#39;s
                start investigating technological architecture and implementing
                your blockchain ideas at Firebird Developer Hub.
              </span>
              <div className="flex mt-3 md:mt-7 gap-2">
                <ButtonLink
                  href="https://github.com/"
                  target="_blank"
                  className="px-[33px] bg-black text-white"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 relative">
                      <Image src={iconGithub} alt="" />
                    </div>
                    Github
                  </div>
                </ButtonLink>
                <ButtonLink
                  href="https://www.reddit.com/"
                  target="_blank"
                  className="px-[33px] bg-black text-white"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 relative">
                      <Image src={iconReddit} alt="" />
                    </div>
                    Reddit
                  </div>
                </ButtonLink>
              </div>
            </div>
            <div
              className="flex max-w-[640px] items-center"
              data-aos="fade-left"
            >
              <Image src={birdnestDeveloper} alt="" objectFit="contain" />
            </div>
          </div>

          <div
            className={clsx(
              "flex flex-col-reverse justify-between bg-white rounded-[32px] mt-5 px-5 py-8",
              "md:flex-row md:pt-9 md:pr-5 md:pb-10 md:pl-10 md:mt-8"
            )}
          >
            <div
              className={clsx(
                "flex flex-col max-w-[440px] justify-center items-center text-center",
                "md:pr-5 md:text-left md:items-start"
              )}
            >
              <p className="text-3xl mt-3 md:mt-0 md:text-4xl font-semibold font-birdMedium">
                Firebird Documentation
              </p>
              <span className="mt-4 text-sm md:text-base">
                Dive into the Firebird ecosystem to learn more about the
                platform’s features, solutions, infrastructure, roadmap, etc.,
                and understand why we started building Firebird.
              </span>
              <div className="flex mt-3 md:mt-7 gap-2">
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
    </div>
  )
}

export default BirdNestPage
