import clsx from "clsx"
import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "./faq.module.scss"

import { Disclosure, Transition } from "@headlessui/react"
import iconMinus from "/public/images/icon-minus.svg"
import iconPlus from "/public/images/icon-plus.svg"
import iconSearch from "/public/images/icon-search-white.svg"

type FaqTypes = {
  id: number
  question: string
  answer: string
}

const faqs: Array<FaqTypes> = [
  {
    id: 1,
    question: "What is Firebird?",
    answer: `Firebird is a stand-alone chain built with Cosmos SDK designed specifically for Web3 games and metaverse. It allows developers to create scalable and user-friendly real-time dApps with cheap costs and fast speed without ever compromising security. With Firebird, we focus on blockchain performance to boost users’ gaming experience and aim to create an efficient chain that enables fast and low-cost transactions, facilitating easy trading for in-game assets.`
  },
  {
    id: 2,
    question: "When is the mainnet launch?",
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
    question: "Why did Firebird build with Cosmos SDK?",
    answer: `Cosmos is an internet of blockchains. Cosmos will make it simple to develop blockchain technology by overcoming the primary problems of earlier blockchain efforts and enabling chain interoperability.  Additionally, Cosmos SDK seeks to address the modern blockchain infrastructure's scalability, usability, and sovereignty.
    By leveraging the aforementioned benefits of Cosmos, Firebird provides a platform that makes it possible to construct blockchain applications, Web3 games and services that are robust, secure, interoperable, and easy to use.`
  },
  {
    id: 6,
    question:
      "Does Firebird have a bug bounty program available at the moment?",
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
    question: "What makes Firebird different from other chains?",
    answer: `Firebird can solve most of the problems that blockchain gaming is now facing, like performance, scalability, interoperability, etc. Additionally, utilizing Icetea ecosystem, Firebird can support the full life cycle of a typical blockchain project (including preparation, blockchain development, token sales, NFT sales, game launch, player attraction, and metaverse experiences). 
    The Firebird team is currently investigating further distinctive features to provide efficient services and the best user experience in the future.`
  }
]

const FAQPage = () => {
  const [faqData, setFaqData] = useState<Array<FaqTypes>>(faqs)
  const [inputSearch, setInputSearch] = useState<string>("")

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

  return (
    <div className="flex flex-col w-full">
      <div className={clsx(styles.banner, "flex text-white pt-20")}>
        <div
          className={clsx(
            styles.section,
            "flex flex-col px-8 text-center justify-center",
            "md:px-40"
          )}
        >
          <p className="text-6xl md:text-7xl font-birdMedium font-semibold">
            What are you looking for?
          </p>
          <p className="text-lg md:text-2xl md:leading-8 font-birdMedium mx-auto">
            Find answers to the questions we receive most often here.
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
            "w-full max-w-[1120px] mx-auto pt-10 px-5 pb-[60px] flex flex-col gap-3",
            "md:px-10 md:pt-20 md:pb-[160px]"
          )}
        >
          {faqData.map((item) => (
            <Disclosure key={item.id}>
              {({ open }) => (
                <div
                  className={clsx(
                    "flex flex-col w-full cursor-pointer rounded-[20px] overflow-hidden transition-colors",
                    open ? "bg-black text-white" : "bg-white text-black"
                  )}
                >
                  <Disclosure.Button
                    className={clsx(
                      "text-2xl font-semibold flex justify-between items-start gap-2 outline-none py-6 px-8"
                    )}
                  >
                    <span className="flex-1 block text-left">
                      {item.question}
                    </span>
                    <div className="relative w-5 h-5">
                      <Image src={open ? iconMinus : iconPlus} alt="" />
                    </div>
                  </Disclosure.Button>
                  <Transition
                    className="overflow-hidden"
                    enter="transition transition-[max-height] duration-500 ease-in"
                    enterFrom="transform max-h-0"
                    enterTo="transform max-h-screen"
                    leave="transition transition-[max-height] duration-500 ease-out"
                    leaveFrom="transform max-h-screen"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel className="text-lg opacity-80 whitespace-pre-line break-words">
                      {({ close }) => (
                        <span
                          className="pb-6 px-8 block"
                          onClick={() => {
                            close()
                          }}
                        >
                          {item.answer}
                        </span>
                      )}
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQPage
