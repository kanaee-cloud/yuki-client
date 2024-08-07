import { Bounce, ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider.jsx";
import { IoIosLogOut } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";

const Navbar = () => {
    const navigate = useNavigate();
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
        <div className="flex p-4 items-center justify-between">
          <div>
            <div className="bg-semiblack p-2 rounded-full">
            <GoHomeFill size={30} className=" z-50"/>
            </div>
          </div>
          <div>
            <button onClick={handleSignOut}>
              <IoIosLogOut />
            </button>
          </div>
        </div>	
    </>
  )
}

export default Navbar