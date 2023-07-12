import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import logo from "./assets/images/logo.svg"
import brand from "./assets/images/icon-brand-recognition.svg"
import records from "./assets/images/icon-detailed-records.svg"
import customize from "./assets/images/icon-fully-customizable.svg"
import heroImg from "./assets/images/illustration-working.svg"
import Button, { Paragraph, Heading2, Heading3, Box } from "./Button"
import Nav from "./Nav"
import Form from "./form"

function App() {
  const [screenSize, setSize] = useState(window.innerWidth)
  useEffect(() => {
    window.onresize = () => {
      setSize(window.innerWidth)
    }
  }, [screenSize])
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <header className="w-5/6 lg:w-3/4 mx-auto my-0 max-w-screen-lg">
        <div className="flex items-center justify-between lg:gap-lg px-0 py-md relative">
          <img src={logo} alt="logo" className="w-[20vw] max-w-[120px]" />
          {screenSize < 1024 ? (
            <>
              <menu
                className="cursor-pointer px-sm text-xl hover:text-cyan"
                onClick={() => {
                  setOpenMenu(!openMenu)
                }}
              >
                {openMenu ? (
                  <FontAwesomeIcon icon={faXmark} />
                ) : (
                  <FontAwesomeIcon icon={faBars} />
                )}
              </menu>
              <div className="absolute top-[4rem] right-[2%] w-2/3 max-w-sm">
                {openMenu ? <Nav /> : null}
              </div>
            </>
          ) : (
            <Nav />
          )}
        </div>
      </header>
      <main className="">
        <section className="w-5/6 lg:w-3/4 mx-auto my-0 max-w-screen-lg mb-xl md:mb-[0px]">
          <div className="md:flex md:items-center md:flex-row-reverse px-0 md:py-xl">
            <aside>
              <img
                src={heroImg}
                alt="Illustration of man working on computer"
                className="w-[80vw] max-w-[500px] md:w-[50vw] md:max-w-[800px] mr-[-20vw]"
              />
            </aside>
            <main className="text-center grid gap-sm pr-lg md:text-start">
              <h1 className="font-bold text-4xl sm:max-md:text-5xl lg:text-6xl/[1.1] mt-lg md:mt-[0px]">
                More than just shorter links
              </h1>
              <Paragraph>
                Build your brands recognition and get detailed insights on how
                your links are performing
              </Paragraph>
              <div className="mt-md">
                <Button url="#">Get Started</Button>
              </div>
            </main>
          </div>
        </section>
        <section className="relative z-50 w-5/6 lg:w-3/4 mx-auto my-0 max-w-screen-lg p-md md:p-lg rounded-md text-center bg-vDarkBlue bg-cover bg-no-repeat bg-[url('./assets/images/bg-boost-mobile.svg')] lg:bg-[url('./assets/images/bg-boost-desktop.svg')]">
          <Form />
        </section>
        <section className="py-[9rem] md:py-[12rem] -mt-[4rem] bg-gray bg-opacity-30">
          <div className="text-center w-5/6 lg:w-3/4 mx-auto my-0 max-w-screen-lg grid justify-items-center">
            <Heading2>Advanced Statistics</Heading2>
            <Paragraph>
              Track how your links are performing across the web with our
              advanced statistics dashboard
            </Paragraph>
            <div className="flex flex-col md:flex-row flex-wrap gap-lg mt-md">
              <article className="mt-lg flex-grow w-[300px] max-w-[400px] xl:mt-md relative before:content-[''] before:absolute before:bg-cyan before:w-[5px] md:before:w-xl before:h-xl md:before:h-[5px] before:top-full md:before:top-1/2 before:right-1/2 md:before:left-full">
                <Box icon={brand} alt="iamge of graph">
                  <Heading3 marginTop="mt-md">Brand Recognition</Heading3>
                  <Paragraph size="text-[12px]" sizeResponsive="text-[15px]">
                    Booost your brand recognition with each click. Generic links
                    don't mean a thing. Branded links help instil confidence in
                    your content.
                  </Paragraph>
                </Box>
              </article>
              <article className="mt-lg flex-grow w-[300px] max-w-[400px] xl:mt-xl relative before:content-[''] before:absolute before:bg-cyan before:w-[5px] md:before:w-xl before:h-xl md:before:h-[5px] before:top-full md:before:top-1/2 before:right-1/2 md:before:left-full">
                <Box icon={records} alt="user icon">
                  <Heading3 marginTop="mt-md">Detailed Records</Heading3>
                  <Paragraph size="text-[12px]" sizeResponsive="text-[15px]">
                    Gain insight into who is clicking your links. Knowing when
                    and where people engage with your content helps inform
                    better decisions.
                  </Paragraph>
                </Box>
              </article>
              <article className="mt-lg flex-grow w-[300px] max-w-[400px] xl:mt-[8rem]">
                <Box icon={customize} alt="image of editing tools">
                  <Heading3 marginTop="mt-md">Fully Customizable</Heading3>
                  <Paragraph size="text-[12px]" sizeResponsive="text-[15px]">
                    Improve brand awareness and content discoverability through
                    customizable links, supercharging audience engagement.
                  </Paragraph>
                </Box>
              </article>
            </div>
          </div>
        </section>
        <section className="py-lg lg:py-xl text-center bg-vDarkBlue bg-cover bg-no-repeat bg-[url('./assets/images/bg-boost-mobile.svg')] lg:bg-[url('./assets/images/bg-boost-desktop.svg')]">
          <div className="w-5/6 lg:w-3/4 mx-auto my-0 max-w-screen-lg grid gap-md justify-items-center">
            <Heading2 color={`text-white`}>Boost your links today</Heading2>
            <Button>Get Started</Button>
          </div>
        </section>
      </main>
      <footer className="bg-vDarkViolet"></footer>
    </>
  )
}

export default App
