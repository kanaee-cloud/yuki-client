import { Link } from "react-router-dom";

const Invalid = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1>Invalid Email or Username</h1>
        <button className="btn px-4">
          <Link to="/login">Back to Login </Link>
        </button>
      </div>
    </div>
  );
};

export default Invalid;
