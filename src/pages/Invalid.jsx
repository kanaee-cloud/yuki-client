import { Link } from "react-router-dom";
import Image from "../assets/not-found.gif";

const Invalid = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center glassmorphism p-4">
        <img src={Image} alt="" width={200} height={200}/>
        <h1>Invalid Email or Username</h1>
        <button className="btn px-4">
          <Link to="/login">Back to Login </Link>
        </button>
      </div>
    </div>
  );
};

export default Invalid;
