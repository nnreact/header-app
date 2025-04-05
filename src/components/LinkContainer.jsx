import Link from "./Link"

function LinkContainer() {
  return (
    <div className="link-container">
        <Link url={"/"} text={"Home"}/>      
        <Link url={"/about"} text={"About Us"}/>      
        <Link url={"/courses"} text={"Our Courses"}/>      
        <Link url={"/contact"} text={"Contact Us"}/>      
    </div>
  )
}

export default LinkContainer
