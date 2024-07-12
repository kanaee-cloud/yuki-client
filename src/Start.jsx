import { Link } from "react-router-dom"



const Start = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      <Link to="/login">Login</Link>
      <Link to="/signup">Register</Link>
    </div>
  )
}

export default Start