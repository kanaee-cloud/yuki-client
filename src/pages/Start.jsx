import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="glassmorphism gap-8 p-8  flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-semibold text-4xl mb-5">
            Boo<span className="text-[#f9d949]">ku!</span>
          </h1>
          <p className="text-xs font-light text-center opacity-40 mt-2">
            Place where you can read or make online book <br /> easily and everywhere
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-3 p-3">
          <button className="btn-yellow w-3/4 text-sm px-3 py-1">
            <Link to="/login">Login</Link>
          </button>
          <button className="btn-yellow w-3/4 text-sm px-3 py-1">
            <Link to="/signup">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
