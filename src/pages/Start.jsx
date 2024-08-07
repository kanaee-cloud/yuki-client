import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Start = () => {
  return (
    <section className="bg-main bg-no-repeat bg-cover">
      <div className="h-screen flex glassmorphism justify-center items-center">
        <div className="box gap-8 p-8  flex flex-col">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-semibold text-4xl mb-5">
              Boo<span className="text-accent">ku!</span>
            </h1>
            <p className="text-xs font-light text-center opacity-80 mt-2">
              Place where you can read or make online book <br /> easily and
              everywhere
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-3 p-3">
            <button className="flex items-center justify-center gap-x-2 btn-main w-3/4 text-sm p-3 font-semibold">
              <Link to="/signup">Register</Link>
              <BsBoxArrowUpRight size={15} />
            </button>
            <Link to="/login" className="text-[10px] opacity-35">
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
