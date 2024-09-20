import {
  faTwitter,
  faInstagram,
  faPinterest,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"
import logo from "./assets/images/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
  return (
    <div className="w-5/6 mx-auto my-0 max-w-screen-lg grid lg:grid-cols-[200px_auto_150px] gap-md">
      <img
        src={logo}
        alt="logo"
        className="invert w-[20vw] max-w-[120px] justify-self-center lg:justify-self-start"
      />
      <menu className="grid lg:grid-cols-3 gap-md justify-items-center">
        <div>
          <h6 className="text-white text-center lg:text-start py-md lg:pt-[0px]">
            Features
          </h6>
          {[
            ["Link Shortening", "#"],
            ["Branded Links", "#"],
            ["Analytics", "#"],
          ].map(([title, url]) => (
            <li
              className="text-[14px] hover:text-cyan text-center lg:text-start lg:pl-[0px] text-grayishViolet px-md py-sm"
              key={title}
            >
              <a href={url}>{title}</a>
            </li>
          ))}
        </div>
        <div>
          <h6 className="text-white text-center lg:text-start py-md lg:pt-[0px]">
            Resources
          </h6>
          {[
            ["Blog", "#"],
            ["Developers", "#"],
            ["Support", "#"],
          ].map(([title, url]) => (
            <li
              className="text-[14px] hover:text-cyan text-center lg:text-start lg:pl-[0px] text-grayishViolet px-md py-sm"
              key={title}
            >
              <a href={url}>{title}</a>
            </li>
          ))}
        </div>
        <div>
          <h6 className="text-white text-center lg:text-start py-md lg:pt-[0px]">
            Company
          </h6>
          {[
            ["About", "#"],
            ["Our Team", "#"],
            ["Careers", "#"],
            ["Contact", "#"],
          ].map(([title, url]) => (
            <li
              className="text-[14px] hover:text-cyan text-center lg:text-start lg:pl-[0px] text-grayishViolet px-md py-sm"
              key={title}
            >
              <a href={url}>{title}</a>
            </li>
          ))}
        </div>
      </menu>
      <menu className="flex justify-self-center">
        {[
          [faFacebook, "https://facebook.com"],
          [faTwitter, "https://twitter.com"],
          [faPinterest, "https://pinterest.com"],
          [faInstagram, "https://instagram.com"],
        ].map(([title, url]) => (
          <li
            className="hover:text-cyan text-gray text-xl px-md lg:px-sm py-sm h-fit"
            key={title}
          >
            <a href={url}>
              <FontAwesomeIcon icon={title} />
            </a>
          </li>
        ))}
      </menu>
    </div>
  )
}
