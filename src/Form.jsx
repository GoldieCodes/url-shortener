import { useFormik } from "formik"
import * as Yup from "yup"
import { Heading3 } from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"

const Form = () => {
  const storedLinks = JSON.parse(localStorage.getItem("links"))
  const [linkDisplay, setDisplay] = useState(storedLinks)

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(linkDisplay))
  }, [linkDisplay])

  const formik = useFormik({
    initialValues: { link: "" },
    onSubmit: async values => {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${values.link}`
      )
      const link = await response.json()
      setDisplay(prev => [...prev, link.result])
      formik.resetForm()
    },
    validationSchema: Yup.object({
      link: Yup.string().required("* Please add a link").url("Invalid link!")
    })
  })

  return (
    <>
      <div
        id="link-input"
        className="relative z-50 w-5/6 lg:w-3/4 mx-auto max-w-screen-lg p-md md:p-lg rounded-md text-center bg-vDarkBlue bg-cover bg-no-repeat bg-[url('./assets/images/bg-boost-mobile.svg')] lg:bg-[url('./assets/images/bg-boost-desktop.svg')]"
      >
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col md:flex-row gap-md"
        >
          <label htmlFor="link" hidden>
            Link
          </label>
          <input
            type="text"
            id="link"
            className={`rounded-md md:w-3/4 p-sm relative ${
              !formik.values.link && formik.touched.link
                ? `outline-[#ff6000]`
                : `outline-[purple]`
            }`}
            placeholder="Shorten a link here"
            {...formik.getFieldProps("link")}
          />
          {formik.touched.link ? (
            <div className="absolute bottom-full lg:bottom-sm text-[#ff6000] text-[13px] italic">
              {formik.errors.link}
            </div>
          ) : null}
          <button
            type="submit"
            className="py-sm px-md bg-cyan rounded-md text-white md:w-1/3 min-w-fit text-center hover:opacity-70 active:translate-y-[3px]"
          >
            Shorten it!
          </button>
        </form>
      </div>
      <section className="-mt-[4rem] py-[5rem] bg-gray bg-opacity-30">
        <Links links={linkDisplay} setLinks={setDisplay} />
      </section>
    </>
  )
}
export default Form

export const Links = ({ links, setLinks }) => {
  const [tab, setTab] = useState("9qr")
  const tabThrough = id => {
    setTab(id)
  }

  const handleCopying = (link, index) => {
    let buttonID = document.getElementById(`${link.code}-${index}`)
    let linkID = document.getElementById(link.code)
    navigator.clipboard.writeText(linkID.innerText)
    buttonID.innerHTML = "Copied!"
    buttonID.classList.add("bg-darkViolet")
    buttonID.classList.remove("hover:opacity-70")
    setTimeout(() => {
      buttonID.classList.remove("bg-darkViolet")
      buttonID.classList.add("hover:opacity-70")
      buttonID.innerHTML = "Copy"
    }, 2500)
  }

  return (
    <div className="w-5/6 lg:w-3/4 mx-auto max-w-screen-lg grid gap-md">
      <header>
        <Heading3>URL Base</Heading3>
      </header>
      <div className="flex flex-col min-[400px]:flex-row gap-sm">
        <button
          className={`p-md ${
            tab === "9qr"
              ? "bg-darkViolet hover:bg-darkViolet text-white"
              : "bg-gray"
          } hover:bg-[#cfcfcfed] `}
          onClick={() => tabThrough("9qr")}
        >
          9qr.de
        </button>
        <button
          className={`p-md ${
            tab === "shrtco"
              ? "bg-darkViolet hover:bg-darkViolet text-white"
              : "bg-gray"
          } hover:bg-[#cfcfcfed] `}
          onClick={() => {
            tabThrough("shrtco")
          }}
        >
          shrtco.de
        </button>
        <button
          className={`p-md ${
            tab === "shiny"
              ? "bg-darkViolet hover:bg-darkViolet text-white"
              : "bg-gray"
          } hover:bg-[#cfcfcfed] `}
          onClick={() => tabThrough("shiny")}
        >
          shiny.link
        </button>
      </div>
      <div className="max-w-[80vw]">
        {tab === "9qr"
          ? links.map((link, index) => {
              return (
                <article
                  key={link.code}
                  className="bg-white p-md rounded-md mb-md break-words lg:flex justify-between items-center"
                >
                  <p className="mb-sm lg:mb-[0px] lg:max-w-[54%]">
                    {link.original_link}
                  </p>
                  <div className="lg:flex gap-md items-center">
                    <p id={link.code} className="text-cyan">
                      {link.full_short_link2}
                    </p>
                    <button
                      id={`${link.code}-${index}`}
                      className={`py-sm px-md mt-sm lg:mt-[0px] rounded-md bg-cyan text-white md:w-1/3 min-w-fit text-center hover:opacity-70 active:translate-y-[3px]`}
                      onClick={() => handleCopying(link, index)}
                    >
                      Copy
                    </button>
                  </div>
                </article>
              )
            })
          : tab === "shrtco"
          ? links.map((link, index) => {
              return (
                <article
                  key={link.code}
                  className="bg-white p-md rounded-md mb-md break-words lg:flex justify-between items-center"
                >
                  <p className="mb-sm lg:mb-[0px] lg:max-w-[54%]">
                    {link.original_link}
                  </p>
                  <div className="lg:flex gap-md items-center">
                    <p id={link.code} className="text-cyan">
                      {link.full_short_link}
                    </p>
                    <button
                      id={`${link.code}-${index}`}
                      className={`py-sm px-md rounded-md bg-cyan mt-sm lg:mt-[0px] text-white md:w-1/3 min-w-fit text-center hover:opacity-70 active:translate-y-[3px]`}
                      onClick={() => handleCopying(link, index)}
                    >
                      Copy
                    </button>
                  </div>
                </article>
              )
            })
          : links.map((link, index) => {
              return (
                <article
                  key={link.code}
                  className="bg-white p-md rounded-md mb-md break-words lg:flex justify-between items-center"
                >
                  <p className="mb-sm lg:mb-[0px] lg:max-w-[54%]">
                    {link.original_link}
                  </p>
                  <div className="lg:flex gap-md items-center">
                    <p id={link.code} className="text-cyan">
                      {link.full_short_link3}
                    </p>
                    <button
                      id={`${link.code}-${index}`}
                      className={`py-sm px-md rounded-md mt-sm lg:mt-[0px] bg-cyan text-white md:w-1/3 min-w-fit text-center hover:opacity-70 active:translate-y-[3px]`}
                      onClick={() => handleCopying(link, index)}
                    >
                      Copy
                    </button>
                  </div>
                </article>
              )
            })}
      </div>

      {links.length < 2 ? null : (
        <div className="mx-auto flex gap-sm items-center justify-center opacity-50 text-[#b82f2f] cursor-pointer hover:opacity-100">
          <button onClick={() => setLinks([])}>Clear Links</button>
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      )}
    </div>
  )
}
