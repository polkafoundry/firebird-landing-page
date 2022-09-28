import clsx from "clsx"
import Image from "next/image"
import React from "react"
import { FeatureTypes } from "."
import styles from "./landing.module.scss"

type FeatureCardProps = {
  feature: FeatureTypes
}

const FeatureCard = (props: FeatureCardProps) => {
  const { feature } = props

  return (
    <div
      className={clsx(
        styles.cardHover,
        "flex flex-col w-full max-w-[374px] pt-8 px-10 pb-[52px]"
      )}
    >
      <div className="relative">
        <Image src={feature.image} alt="" width={140} height={140} />
      </div>
      <span className="mt-8 text-[28px] font-semibold ">{feature.title}</span>
      <span className="mt-1">{feature.detail}</span>
    </div>
  )
}

export default FeatureCard
