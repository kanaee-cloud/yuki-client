import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="glassmorphism flex flex-col gap-y-4 p-4 items-center">
        <div className="flex flex-col justfiy-center items-center">
          <h1 className="font-semibold text-xl">
            Yuki<span className="text-[#f9d949]">nime!</span>
          </h1>
          <p className="text-sm text-center opacity-40 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          </p>
        </div>
        <div className="flex gap-x-4 font-light">
          <button className="btn-yellow w-full text-md px-3">
            <Link to="/login">Login</Link>
          </button>
          <button className="btn-yellow w-full text-md px-3">
            <Link to="/signup">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
