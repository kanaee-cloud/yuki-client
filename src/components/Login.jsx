import { FaArrowRightLong } from "react-icons/fa6";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiClient from "../utils/api";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../contexts/AuthProvider.jsx";


const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post("/login", { email, password });
      console.log(response.data);
      console.log("Token : ", response.data.token)
      if (response.data.message === "Login successful") {
        toast.success(`Welcome ${response.data.user.username}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          onClose: () => {
            setTimeout(() => {
              login("dummyToken", response.data.user.username);
              navigate('/home');
            }, 500);
          },
        });
      } 
    } catch (error) {
      console.log('Error logging in : ', error);
      navigate('/invalid');
    }
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center h-full items-center">
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div className="flex px-10 py-16 glassmorphism ">
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col gap-y-5 items-center">
                <div className="mb-10">
                  <h1 className="text-2xl font-semibold">
                    Boo<span className="text-[#f9d949]">ku!</span>
                  </h1>
                </div>
                <h1 className="text-xl font-semibold">Login</h1>
                <input
                  type="email"
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
                <div className="flex mt-2 gap-x-3">
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
              <div className="flex flex-col items-center w-full ">
                <button type="submit" className="flex justify-center btn w-full items-center mt-4 p-2">
                  <FaArrowRightLong  className="items-center"/>
                </button>
                <Link
                  to="/signup"
                  className="text-xs opacity-30 mt-8 hover:underline"
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
