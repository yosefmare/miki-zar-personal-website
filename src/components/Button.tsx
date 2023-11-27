
type propType = {
    content: string
}

const Button = ({content}: propType): JSX.Element => {
  return (
    <>
      <button className="btn font-medium">{content}</button>
    </>
  )
}

export default Button
