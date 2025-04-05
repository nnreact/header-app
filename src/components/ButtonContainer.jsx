import Button from "./Button.jsx"
function ButtonContainer() {
  return (
    <div className="btn-container">
        <Button text={"register"} type={"secondary"}/> 
        <Button text={"login"} type={"primary"} /> 
    </div>
  )
}

export default ButtonContainer
