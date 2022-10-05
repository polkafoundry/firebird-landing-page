import clsx from "clsx"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import styles from "./faq.module.scss"

import iconSearch from "/public/images/icon-search-white.svg"
import iconMinus from "/public/images/icon-minus.svg"
import iconPlus from "/public/images/icon-plus.svg"

type FaqTypes = {
  id: number
  question: string
  answer: string
}

const faqs: Array<FaqTypes> = [
  {
    id: 1,
    question: "What is Firebird?",
    answer:
      "Firebird is a stand-alone chain on Cosmos designed specifically for games and metaverse. It allows developers to create scalable and user-friendly real-time dApps with cheap costs and fast speed without ever compromising security. With Firebird, we focus on blockchain performance to boost users’ gaming experience and aim to create an efficient chain that enables fast and low-cost transactions, facilitating easy trading for in-game assets."
  },
  {
    id: 2,
    question: "When will the mainnet launch?",
    answer: "Firebird mainnet is expected to launch in December 2022."
  },
  {
    id: 3,
    question: "What can I do with my PKF tokens?",
    answer: `PKF utility:
    - Payment for transaction fees (computation & storage)
    - Staking for validators to earn a share of block rewards
    - Staking to participate in the on-chain governance process and earn rewards for voting on proposals`
  },
  {
    id: 4,
    question: "What is the contract address for PKF?",
    answer:
      "Official $PKF ERC-20 contract address: 0x8b39b70e39aa811b69365398e0aace9bee238aeb"
  },
  {
    id: 5,
    question: "Why did Firebird build on Cosmos?",
    answer: `Cosmos is an internet of blockchains. By addressing the main issues of previous blockchain projects and enabling chain interoperability, Cosmos will create an easy development environment for blockchain technology. 
    Cosmos can solve blockchain challenges thanks to its facilitated scalability, increased sovereignty, speed, and fast finality. It allows applications to scale to millions of users and there are no limits to the application's governance when every chain is maintained by its own set of validators.
    By standardizing architecture components and customizing opportunities, Cosmos offers the possibility of an unconstrained, seamless, and intuitive user experience.
    The advantages of Cosmos mentioned above will make Firebird a powerful platform for developing blockchain dApps.`
  },
  {
    id: 6,
    question: "Does Firebird have a bug bounty program available?",
    answer: `Firebird will have a bug bounty program after the testnet “Firefly” is launched.
    More information about this program will be released soon. Let’s stay tuned to our channels for exclusive events and updates!`
  },
  {
    id: 7,
    question: "Where can I learn more about Firebird?",
    answer: `Visit our blog, whitepaper, GitHub, and join social channels (Twitter, Telegram, Discord, Reddit) to learn more details about Firebird, access constantly updated information, and get support 24/7.`
  },
  {
    id: 8,
    question: "How does Firebird differ from other chains?",
    answer: `Firebird can solve most of the problems that blockchain gaming is now facing, like performance, scalability, interoperability, etc. Additionally, utilizing Icetea ecosystem, Firebird can support the full life cycle of a typical blockchain project (including preparation, blockchain development, token sales, NFT sales, game launch, player attraction, and metaverse experiences). 
    The Firebird team is currently investigating further distinctive features to provide efficient services and the best user experience in the future.`
  }
]

const FAQPage = () => {
  const itemsRef = useRef([])
  const [faqData, setFaqData] = useState<Array<FaqTypes>>(faqs)

  const [inputSearch, setInputSearch] = useState<string>("")
  const [expandedIds, setExpandedIds] = useState<Array<number>>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      const newFaqs = [...faqs].filter(
        (item: FaqTypes) =>
          checkMatch(item.question, inputSearch) ||
          checkMatch(item.answer, inputSearch)
      )
      setFaqData(newFaqs)
    }, 500)

    return () => clearTimeout(timer)
  }, [inputSearch])

  const checkMatch = (string: string, keyword: string) => {
    return string.toLowerCase().includes(keyword.toLowerCase())
  }

  const handleSearch = (e: any) => {
    setInputSearch(e.target.value)
  }

  const checkIsExpanded = (id: number) => {
    return expandedIds.includes(id)
  }

  const handleSelectId = (id: number) => {
    let newIds = [...expandedIds]
    newIds = checkIsExpanded(id)
      ? newIds.filter((item) => item !== id)
      : [...newIds, ...[id]]
    setExpandedIds(newIds)
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
            How can we help you?
          </p>
          <p className="text-2xl leading-8 font-birdMedium mx-auto">
            Find answers to the questions we receive the most frequently here
          </p>

          <div
            className="flex rounded-lg w-full max-w-[570px] p-1 mx-auto mt-8"
            style={{
              background: "linear-gradient(180deg, #EFA84F 0%, #EA3223 100%)"
            }}
          >
            <input
              type="text"
              className="rounded-md w-full h-[42px] px-3 flex items-center outline-none text-black"
              placeholder="Search here"
              value={inputSearch}
              onChange={handleSearch}
            />
            <div className="flex justify-center items-center hover:cursor-pointer gap-1 pr-4 pl-5">
              <div className="flex">
                <Image src={iconSearch} alt="" layout="fixed" />
              </div>
              <span>Search</span>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("w-full bg-birdLightGray", styles.bgContainer)}>
        <div
          className={clsx(
            "w-full max-w-[1120px] mx-auto px-10 pt-20 pb-[160px] flex flex-col gap-3"
          )}
        >
          {faqData.map((item: FaqTypes, index: number) => (
            <div
              key={item.id}
              className={clsx(
                "flex flex-col w-full cursor-pointer py-6 px-8 rounded-[20px] overflow-hidden",
                checkIsExpanded(item.id) ? styles.expanded : styles.closed
              )}
              style={{
                maxHeight: checkIsExpanded(item.id)
                  ? `${104 + itemsRef?.current[index]?.clientHeight}px`
                  : "80px"
              }}
              onClick={() => handleSelectId(item.id)}
            >
              <p className="text-2xl font-semibold flex justify-between">
                {item.question}
                <Image
                  src={checkIsExpanded(item.id) ? iconMinus : iconPlus}
                  alt=""
                />
              </p>
              <div
                ref={(el) => (itemsRef.current[index] = el)}
                className={"text-lg opacity-80 mt-5 whitespace-pre-line"}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQPage