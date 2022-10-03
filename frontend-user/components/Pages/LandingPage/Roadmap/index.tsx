import clsx from "clsx"
import Image from "next/image"
import styles from "../landing.module.scss"
import imgRoadmap from "/public/images/roadmap.svg"

const Roadmap = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className={clsx(styles.section, "px-[100px] pt-20 pb-[68px]")}>
        <div className="flex flex-col w-full">
          <p className="text-center text-[40px] leading-[52px] max-w-[980px] mx-auto font-semibold mt-5 mb-12">
            Roadmap
          </p>

          <Image src={imgRoadmap} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Roadmap
