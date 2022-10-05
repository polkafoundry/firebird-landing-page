import clsx from "clsx"
import Image from "next/image"
import landingStyles from "../landing.module.scss"
import styles from "./backed.module.scss"

type PartnerTypes = {
  name: string
  image: string
  uri: string
}

const fakeGamefi: PartnerTypes = {
  image: "/images/gamefi.svg",
  name: "Gamefi.org",
  uri: "https://gamefi.org/"
}
const fakePolygon: PartnerTypes = {
  image: "/images/polygon.svg",
  name: "Polygon",
  uri: "https://polygon.technology/"
}

const partners: Array<PartnerTypes> = []
for (let i = 0; i < 18; i++) {
  partners.push(i % 2 === 0 ? fakeGamefi : fakePolygon)
}

const Backed = () => {
  return (
    <div className={styles.bgBacked}>
      <div className={clsx(landingStyles.section, "px-[138px] pt-20")}>
        <div className="flex flex-col justify-center">
          <p className="text-4xl font-semibold text-center w-full">
            Backed by
          </p>
          <a
            href="https://icetea.io/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col px-12 pt-10 pb-7 mt-7 bg-white w-fit mx-auto rounded-[32px] justify-center"
          >
            <div className="relative mx-auto">
              <Image
                src="/images/logo-icetea.svg"
                alt=""
                width={90}
                height={90}
                layout="fixed"
              />
            </div>
            <p className="text-center text-xl font-semibold">Icetea Labs</p>
          </a>

          <p className="mt-20 text-center font-semibold text-4xl max-w-[980px] mx-auto">
            <span className="bg-main text-white px-1 rounded-md">
              Our partners
            </span>{" "}
            focus on long-term development to provide the best user experience
            and benefits.
          </p>

          <div className="w-full flex flex-wrap gap-3 mt-7">
            {partners.map((item: PartnerTypes, index: number) => (
              <a
                key={index + 1000}
                href={item.uri}
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-[32px] w-[184px] flex flex-col justify-center items-center pt-9 pb-7"
              >
                <div className="relative max-w-[80px]">
                  <Image
                    src={item.image}
                    alt=""
                    width={80}
                    height={80}
                    layout="fixed"
                  />
                </div>
                <p className="font-semibold mt-1">{item.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Backed
