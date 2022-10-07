import iconMedium from "/public/images/socials/medium.svg"
import iconGithub from "/public/images/socials/github.svg"
import iconTelegram from "/public/images/socials/telegram.svg"
import iconTwitter from "/public/images/socials/twitter.svg"
import iconReddit from "/public/images/socials/reddit.svg"

import iconMediumHover from "/public/images/socials/medium.svg"
import iconGithubHover from "/public/images/socials/github.svg"
import iconTelegramHover from "/public/images/socials/telegram.svg"
import iconTwitterHover from "/public/images/socials/twitter.svg"
import iconRedditHover from "/public/images/socials/reddit.svg"

export type SocialItemTypes = {
  img: string
  imgHover: string
  label: string
  username: string
  url: string
}
export const socialsData: Array<SocialItemTypes> = [
  {
    img: iconTwitter,
    imgHover: iconTwitterHover,
    label: "Official Twitter",
    url: "https://twitter.com/Firebirdchain",
    username: "@Firebirdchain"
  },
  {
    img: iconGithub,
    imgHover: iconGithubHover,
    label: "Github",
    url: "https://github.com/firebird",
    username: "@Firebird"
  },
  {
    img: iconMedium,
    imgHover: iconMediumHover,
    label: "Medium",
    url: "https://medium.com/firebird",
    username: "@Firebird"
  },
  {
    img: iconReddit,
    imgHover: iconRedditHover,
    label: "Reddit",
    url: "https://www.reddit.com/r/firebird/",
    username: "r/firebird"
  },
  {
    img: iconTelegram,
    imgHover: iconTelegramHover,
    label: "Annoucement Channel",
    url: "https://t.me/FirebirdANN",
    username: "@FirebirdANN"
  },
  {
    img: iconTelegram,
    imgHover: iconTelegramHover,
    label: "Telegram Group",
    url: "https://t.me/Firebird_en",
    username: "@Firebird_en"
  }
]

type HeadDefaultTypes = {
  image: string
  title: string
  description: string
}

export const headDefault: HeadDefaultTypes = {
  description:
    "Develop/ Build the next hassle-free and user-friendly NFT gaming & metaverse with Firebird.",
  image: "https://redkite.polkafoundry.com/images/red-kite-sharing.png",
  title: "Firebird"
}
