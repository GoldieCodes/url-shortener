import { useFormik } from "formik"
import * as Yup from "yup"
import { Heading3, Paragraph } from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"

const Form = () => {
  const [shortLink, setLink] = useState(
    JSON.parse(localStorage.getItem("storeLinks")) || []
  )
  const API_KEY = "O2zDY6jMv7Hde9RKO24X6dBr8uHaDwQzB0j72xABFNEp5kJtWsHitA0doBS2"

  useEffect(() => {
    localStorage.setItem("storeLinks", JSON.stringify(shortLink))
  }, [shortLink])

  const formik = useFormik({
    initialValues: { link: "" },
    onSubmit: async (values) => {
      const response = await fetch("https://api.tinyurl.com/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`, // Add the API key here
        },
        body: JSON.stringify({
          url: values.link, // The long URL to shorten
          domain: "tinyurl.com", // Optional, to specify custom domain
        }),
      })
      const data = await response.json()
      setLink((prev) => [
        ...prev,
        { long: data.data.url, short: data.data.tiny_url },
      ])
      formik.resetForm()
    },
    validationSchema: Yup.object({
      link: Yup.string().required("* Please add a link").url("Invalid link!"),
    }),
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
        <Links links={shortLink} setLinks={setLink} />
      </section>
    </>
  )
}
export default Form

export const Links = ({ links, setLinks }) => {
  const handleCopying = (link, index) => {
    let buttonID = document.getElementById(`${link}-${index}`)
    let linkID = document.getElementById(link)
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
      {links.length > 0 && (
        <header>
          <Heading3>Your Urls</Heading3>
          <Paragraph>
            We are using the tinyurl api to shorten your link.
          </Paragraph>
        </header>
      )}

      <div className="max-w-[80vw]">
        {links.length > 0 &&
          links.map((link, index) => {
            return (
              <article
                key={`${link.short}-${index}`}
                className="bg-white p-md rounded-md mb-md break-words lg:flex justify-between items-center"
              >
                <p className="mb-sm lg:mb-[0px] lg:max-w-[54%]">{link.long}</p>
                <div className="lg:flex gap-md items-center">
                  <p id={link.short} className="text-cyan">
                    {link.short}
                  </p>
                  <button
                    id={`${link.short}-${index}`}
                    className={`py-sm px-md mt-sm lg:mt-[0px] rounded-md bg-cyan text-white md:w-1/3 min-w-fit text-center hover:opacity-70 active:translate-y-[3px]`}
                    onClick={() => handleCopying(link.short, index)}
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
