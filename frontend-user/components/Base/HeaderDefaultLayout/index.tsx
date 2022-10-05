import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"

const HeaderDefaultLayout = () => {
  const renderHeaderMobile = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-screen overflow-y-auto hidden"></div>
    )
  }

  return (
    <>
      <nav
        className={clsx(
          "absolute -translate-x-1/2 left-1/2 h-20 w-full flex items-center justify-between max-w-screen-main text-white",
          "md:px-[120px]",
          "xs:px-[60px]",
          "pl-5 pr-6"
        )}
      >
        <Link href="/">
          <a>
            <Image
              src="/images/logo-text.svg"
              width="192px"
              height="42px"
              layout="fixed"
              alt=""
            />
          </a>
        </Link>
        <div className={clsx("gap-5 hidden", "md:flex")}>
          <Link href="/bird-nest">
            <a target="_blank">Bird nest</a>
          </Link>
          <Link href="/community">
            <a target="_blank">Community</a>
          </Link>
          <Link href="https://firebird-1.gitbook.io/firebird-whitepaper/">
            <a target="_blank">Documentation</a>
          </Link>
          <Link href="/faq">
            <a target="_blank">FAQ</a>
          </Link>
        </div>
      </nav>

      {renderHeaderMobile()}
    </>
  )
}

export default HeaderDefaultLayout
