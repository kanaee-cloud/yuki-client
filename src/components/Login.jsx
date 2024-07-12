import { FaArrowRightLong } from "react-icons/fa6";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from 'react-toastify';
import apiClient from "../utils/api";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post("/login", { email, password });
      console.log(response.data);
      if (response.data.message === "Login successful") {
        toast.success('🦄 Wow so easy!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        navigate('/home');
      }
    } catch (error) {
      console.log('Error logging in : ', error);
      toast.error('Failed to login. Please try again.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="h-screen">
      <div className="flex justify-left h-full ">
        <form onSubmit={handleSubmit}>
          <div className="flex h-full px-10 py-16 bg-[#100e34]">
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col gap-y-5 items-center">
                <div className="mb-10">
                  <h1 className="text-2xl font-semibold">
                    Yuki<span className="text-[#f9d949]">nime!</span>
                  </h1>
                </div>
                <h1 className="text-xl font-semibold">Login</h1>
                <input
                  type="text"
                  className="neumorphism p-1 px-4 text-md placeholder:text-sm placeholder:opacity-50 outline-none"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="neumorphism p-1 px-4 text-md placeholder:text-sm placeholder:opacity-50 outline-none"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex mt-2 gap-x-2">
                  <a href="/" className="btn-yellow px-7 p-2">
                    <FaGoogle />
                  </a>
                  <a href="/" className="btn-yellow px-7 p-2">
                    <FaFacebook />
                  </a>
                  <a href="/" className="btn-yellow px-7 p-2">
                    <FaApple />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center ">
                <button type="submit" className="btn p-4">
                  <FaArrowRightLong />
                </button>
                <Link
                  to="/signup"
                  className="text-xs opacity-30 mt-10 hover:underline"
                >
                  <p>Create Account</p>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* Container untuk menampilkan Toastify */}
    </div>
  );
};

export default Login;
