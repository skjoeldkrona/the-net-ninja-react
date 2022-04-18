const Title = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="title"> {title}</h1>
      <br />
      <h2 className="subtitle">{subtitle}</h2>
    </>
  )
}

export default Title;