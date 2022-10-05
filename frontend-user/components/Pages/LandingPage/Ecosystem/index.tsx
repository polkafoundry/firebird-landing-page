import clsx from "clsx"
import Image from "next/image"
import styles from "../landing.module.scss"
import imgEcosystem from "/public/images/ecosystem.svg"
import imgEcosystemXs from "/public/images/ecosystem-xs.svg"

const Ecosystem = () => {
  return (
    <div className="w-full bg-black text-white">
      <div
        className={clsx(
          styles.section,
          "px-10 py-[60px] md:px-[100px] md:py-20"
        )}
      >
        <div className="flex flex-col w-full">
          <span className="text-main uppercase font-semibold font-birdMedium text-center tracking-wider text-sm md:text-base">
            Join the Firebird ecosystem
          </span>
          <p className="text-center text-3xl md:text-4xl max-w-[980px] mx-auto font-semibold mt-2 mb-10">
            {`Grow your project using the Firebird ecosystem's end-to-end
              infrastructure.`}
          </p>

          <div className="relative hidden md:block">
            <Image src={imgEcosystem} alt="" />
          </div>
          <div className="relative md:hidden flex justify-center">
            <Image src={imgEcosystemXs} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecosystem
