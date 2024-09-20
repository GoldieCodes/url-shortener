const Button = ({ children, url, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-sm px-md bg-cyan rounded-full text-white w-1/3 min-w-fit text-center hover:opacity-70"
    >
      <a href={url}>{children}</a>
    </button>
  )
}
export default Button

export const Paragraph = ({
  children,
  size = `text-[16px]`,
  sizeResponsive = `sm:text-lg`
}) => {
  return (
    <p
      className={`max-w-md text-grayishViolet font-medium ${size} ${sizeResponsive} mt-sm`}
    >
      {children}
    </p>
  )
}

export const Heading2 = ({ children, color = `text-vDarkViolet` }) => {
  return (
    <h2
      className={`font-bold ${color} text-2xl sm:max-md:text-3xl md:text-4xl`}
    >
      {children}
    </h2>
  )
}

export const Heading3 = ({
  children,
  color = `text-vDarkViolet`,
  marginTop = `mt-md`
}) => {
  return (
    <h3
      className={`font-bold ${color} ${marginTop} text-xl sm:max-md:text-xl lg:text-2xl/[1.1]`}
    >
      {children}
    </h3>
  )
}

export const Box = ({ icon, alt, children }) => {
  return (
    <div className="relative bg-white rounded-md p-[2rem] min-w-[200px] w-full grid justify-items-center xl:justify-items-start xl:text-start">
      <img
        src={icon}
        alt={alt}
        className="rounded-full p-md bg-darkViolet -mt-[3.7rem]"
      />
      {children}
    </div>
  )
}
