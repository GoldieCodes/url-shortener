const Form = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-md">
      <label htmlFor="link" hidden>
        Link
      </label>
      <input
        type="text"
        id="link"
        className="rounded-md md:w-3/4 p-sm"
        placeholder="Shorten a link here"
      />
      <button
        type="submit"
        className="py-sm px-md bg-cyan rounded-md text-white md:w-1/3 min-w-fit text-center hover:opacity-70"
      >
        Shorten it!
      </button>
    </form>
  )
}
export default Form
