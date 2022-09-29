import clsx from "clsx"
import styles from "./community.module.scss"

import FirebirdCommunity from "../../Base/FirebirdCommunity"

const CommunityPage = () => {
  const renderJoinCommunityEvent = () => {
    return <div className="flex">Join our community events</div>
  }

  return (
    <div className="flex flex-col w-full">
      <div className={clsx(styles.banner, "flex text-white pt-20")}>
        <div
          className={clsx(
            styles.section,
            "flex flex-col px-40 text-center justify-center"
          )}
        >
          <p className="text-[80px] leading-[100px] font-birdMedium font-semibold">
            Firebird Community
          </p>
          <p className="mt-5 text-[28px] font-birdMedium max-w-[640px] mx-auto">
            A space for all blockchain enthusiasts. Developers, investors,
            users, etc., everyone is welcome!
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
          <FirebirdCommunity />
        </div>
      </div>
    </div>
  )
}

export default CommunityPage
