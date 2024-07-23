import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider.jsx";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { IoIosLogOut } from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const navigate = useNavigate;
  const { logout } = useAuth();
  const handleSignOut = () => {
    toast.success("Logout success", {
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
          logout();
          navigate("/");
        }, 500);
      },
    });
    console.log("Sign out clicked");
  };

  return (
    <>
      <ToastContainer />
      <div className="h-screen">
        <div className="flex p-4 items-center justify-between bg-[#100e34]">
          <h1>Welcome</h1>
          <div>
            <button onClick={handleSignOut}>
              <IoIosLogOut size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
