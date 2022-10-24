import iconMedium from "/public/images/socials/medium.svg"
import iconGithub from "/public/images/socials/github.svg"
import iconTelegram from "/public/images/socials/telegram.svg"
import iconAnnouncement from "/public/images/socials/announcement.svg"
import iconTwitter from "/public/images/socials/twitter.svg"
import iconReddit from "/public/images/socials/reddit.svg"

import iconMediumHover from "/public/images/socials/medium.svg"
import iconGithubHover from "/public/images/socials/github.svg"
import iconTelegramHover from "/public/images/socials/telegram.svg"
import iconAnnouncementHover from "/public/images/socials/announcement.svg"
import iconTwitterHover from "/public/images/socials/twitter.svg"
import iconRedditHover from "/public/images/socials/reddit.svg"

export type SocialItemTypes = {
  img: string
  imgHover: string
  label: string
  username?: string
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
    url: "https://github.com/firebird"
    // username: "@Firebird"
  },
  {
    img: iconMedium,
    imgHover: iconMediumHover,
    label: "Medium",
    url: "https://medium.com/firebirdchain",
    username: "@Firebirdchain"
  },
  {
    img: iconReddit,
    imgHover: iconRedditHover,
    label: "Reddit",
    url: "https://www.reddit.com/r/firebird/"
    // username: "r/firebird"
  },
  {
    img: iconAnnouncement,
    imgHover: iconAnnouncementHover,
    label: "Announcement Channel",
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
  keywords: string
}

export const headDefault: HeadDefaultTypes = {
  description: "Build scalable and intuitive Web3 games with Firebird",
  image: "https://d1j2c9jkfhu70p.cloudfront.net/Thumbnail_2_7bc61c9253.png",
  title: "Firebird",
  keywords:
    "firebird, firebird chain, firebird token, firebird crypto, scalability, scalable, intuitive, optimization, near-zero costs, no security compromise"
}
