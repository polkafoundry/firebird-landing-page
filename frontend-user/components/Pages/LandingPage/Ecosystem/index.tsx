import clsx from "clsx"
import Image from "next/image"
import styles from "../landing.module.scss"
import imgEcosystem from "/public/images/ecosystem.svg"

const Ecosystem = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className={clsx(styles.section, "px-[100px] py-20")}>
        <div className="flex flex-col w-full">
          <span className="text-main uppercase font-semibold font-birdMedium text-center tracking-wider">
            Join the Firebird ecosystem
          </span>
          <p className="text-center text-4xl max-w-[980px] mx-auto font-semibold mt-2 mb-10">
            {`Grow your project using the Firebird ecosystem's end-to-end
              infrastructure.`}
          </p>

          <Image src={imgEcosystem} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Ecosystem
