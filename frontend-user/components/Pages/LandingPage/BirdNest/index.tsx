import clsx from "clsx"
import Image from "next/image"
import { birdnestData } from "../../../../utils/constants"
import Button from "../../../Base/Button"
import ButtonLink from "../../../Base/ButtonLink"
import landingStyles from "../landing.module.scss"
import styles from "./birdnest.module.scss"

import birdnestBlog from "/public/images/birdnest-blog.png"
import birdnestDeveloper from "/public/images/birdnest-developer.png"
import birdnestDocumentation from "/public/images/birdnest-documentation.png"

import iconGithub from "/public/images/socials/github.svg"
import iconReddit from "/public/images/socials/reddit.svg"

const componentStyles = {
  titleBox:
    "flex flex-col max-w-[440px] justify-center items-center text-center",
  title: "text-3xl xs:text-4xl font-semibold font-birdMedium",
  description: "mt-3 text-sm xs:text-22px md:mt-4 md:text-base",
  button: "flex mt-3 xs:mt-8 md:mt-7"
}

const BirdNest = () => {
  return (
    <div className={styles.bgBirdNest}>
      <div
        className={clsx(
          landingStyles.section,
          "px-5 py-[60px] flex flex-col",
          "xs:px-[120px] xs:pt-[80px] xs:pb-[120px]",
          "md:pt-[120px] md:pb-[160px]"
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
          Fly into the Firebird world
        </p>

        <div
          className={clsx(
            "flex justify-between items-center flex-col-reverse gap-3 pl-0 mt-[60px]",
            "md:gap-0 md:flex-row md:pl-10 md:mt-20"
          )}
        >
          <div
            className={clsx(
              componentStyles.titleBox,
              "xs:max-w-[600px]",
              "md:pr-5 md:text-left md:items-start md:max-w-[440px]"
            )}
          >
            <p className={componentStyles.title}>{birdnestData.blog.title}</p>
            <span className={componentStyles.description}>
              {birdnestData.blog.description}
            </span>
            <div className={componentStyles.button}>
              {/* <ButtonLink
                href={firebirdTechBlog}
                target="_blank"
                className="px-[43px] bg-black text-white"
              >
                Read now
              </ButtonLink> */}
              <Button className="px-[43px] bg-black text-white">
                Coming soon
              </Button>
            </div>
          </div>
          <div
            className="flex max-w-[640px] drop-shadow-xl items-center"
            data-aos="fade-right"
          >
            <Image src={birdnestBlog} alt="" objectFit="contain" priority />
          </div>
        </div>

        <div
          className={clsx(
            "flex justify-between items-center flex-col-reverse gap-6 pr-0 mt-20",
            "xs:mt-[120px]",
            "md:gap-0 md:flex-row-reverse md:pr-10 md:mt-20"
          )}
        >
          <div
            className={clsx(
              componentStyles.titleBox,
              "xs:max-w-[600px]",
              "md:text-left md:pl-5 md:items-start md:max-w-[440px]"
            )}
          >
            <p className={componentStyles.title}>{birdnestData.hub.title}</p>
            <span className={componentStyles.description}>
              {birdnestData.hub.description}
            </span>
            <div className={clsx(componentStyles.button, "gap-2")}>
              <Button className="px-[33px] bg-black text-white">
                <div className="flex items-center gap-2">
                  <Image src={iconGithub} alt="" width={28} height={28} />
                  Github
                </div>
              </Button>
              <Button className="px-[33px] bg-black text-white">
                <div className="flex items-center gap-2">
                  <Image src={iconReddit} alt="" width={28} height={28} />
                  Reddit
                </div>
              </Button>
              {/* <ButtonLink
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
              </ButtonLink> */}
            </div>
          </div>
          <div className="flex max-w-[640px] items-center" data-aos="fade-left">
            <Image
              src={birdnestDeveloper}
              alt=""
              objectFit="contain"
              priority
            />
          </div>
        </div>

        <div
          className={clsx(
            "flex justify-between items-center flex-col-reverse gap-3 pl-0 mt-20",
            "xs:mt-[120px]",
            "md:gap-0 md:flex-row md:pl-10 md:mt-20"
          )}
        >
          <div
            className={clsx(
              componentStyles.titleBox,
              "xs:max-w-[600px]",
              "md:text-left md:pr-5 md:items-start md:max-w-[440px]"
            )}
          >
            <p className={componentStyles.title}>
              {birdnestData.documentation.title}
            </p>
            <span className={componentStyles.description}>
              {birdnestData.documentation.description}
            </span>
            <div className={componentStyles.button}>
              <ButtonLink
                href="https://docs.firebirdchain.com/"
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
            <Image
              src={birdnestDocumentation}
              alt=""
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BirdNest
