import Button from "./Button"

export default function Nav() {
  return (
    <nav className="font-bold text-center bg-darkViolet lg:bg-white p-md lg:p-[0px] rounded-lg lg:rounded-none  lg:flex items-center justify-between w-full text-white lg:text-grayishViolet">
      <menu className="lg:flex">
        {[
          ["Features", "#advanced-statistics"],
          ["Pricing", "#"],
          ["Resources", "#"]
        ].map(([title, url]) => (
          <li
            className="hover:text-cyan lg:hover:text-vDarkViolet px-md py-sm"
            key={title}
          >
            <a href={url}>{title}</a>
          </li>
        ))}
      </menu>
      <menu className="py-sm lg:py-[0px] border-t lg:border-t-0 border-t-grayishViolet border-opacity-40 lg:flex items-center">
        <li className="hover:text-cyan lg:hover:text-vDarkViolet px-md py-sm">
          <a href="#">Login</a>
        </li>
        <li className="p-md">
          <Button url="#">Sign Up</Button>
        </li>
      </menu>
    </nav>
  )
}
