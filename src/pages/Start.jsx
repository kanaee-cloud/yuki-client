import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="glassmorphism flex flex-col gap-y-4">
        <div className="flex flex-col justfiy-center p-8 items-center">
          <h1 className="font-semibold text-xl">
            Yuki<span className="text-[#f9d949]">nime!</span>
          </h1>
          <p className="text-xs font-light text-center opacity-40 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-3 p-3">
          <button className="btn-yellow w-3/4 text-md px-3">
            <Link to="/login">Login</Link>
          </button>
          <button className="btn-yellow w-3/4 text-md px-3">
            <Link to="/signup">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
