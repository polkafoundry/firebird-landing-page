import clsx from "clsx"
import FirebirdCommunity from "../../../Base/FirebirdCommunity"
import landingStyles from "../landing.module.scss"
import styles from "./community.module.scss"

const Community = () => {
  return (
    <div className={styles.bgCommunity}>
      <div className={clsx(landingStyles.section, "px-[100px] pt-20 pb-20")}>
        <FirebirdCommunity />
      </div>
    </div>
  )
}

export default Community
