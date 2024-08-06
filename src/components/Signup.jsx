import { FaArrowRightLong } from "react-icons/fa6";
// 
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiClient from "../utils/api";

const Signup = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await apiClient.post('/register', { username, email, password });
      console.log(response.data);
      navigate('/login');
    } catch (error){
      console.log('Error signing up : ', error);
    }
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center items-center h-full">
        <form onSubmit={handleSubmit}>
          <div className="flex px-10 py-16 box">
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col gap-y-5 items-center">
                <div className="mb-5">
                  <h1 className="text-2xl font-semibold">
                    Boo<span className="text-accent">ku!</span>
                  </h1>
                </div>
                <h1 className="text-xl font-semibold">Create Account</h1>
                <input
                  type="text"
                  className="neumorphism w-full p-3 px-4 rounded-xl text-sm placeholder:text-sm placeholder:opacity-50 outline-none"
                  placeholder="Username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="text"
                  className="neumorphism p-3 w-full px-4 rounded-xl text-sm placeholder:text-sm placeholder:opacity-50 outline-none"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  className="neumorphism p-3 w-full px-4 rounded-xl text-sm placeholder:text-sm placeholder:opacity-50 outline-none"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-center w-full ">
                <button type="submit" className="flex justify-center btn-main w-full items-center mt-4 p-2">
                  <FaArrowRightLong  className="items-center"/>
                </button>
                <Link
                  to="/login"
                  className="text-xs opacity-30 mt-6 hover:underline"
                >
                  <p>Already have an account?</p>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
