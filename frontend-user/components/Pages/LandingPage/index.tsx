import React from "react"
import clsx from "clsx"
import styles from "./landing.module.scss"

const LandingPage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className={clsx(styles.banner, "flex text-white pt-20")}>
        <div className={styles.section}>
          <p className="mt-12">Firebird</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
