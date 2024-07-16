import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider.jsx";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { jwtDecode }from 'jwt-decode';
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const token = localStorage.getItem("token");
  let username = '';

  if(token){
    const decoded = jwtDecode(token);
    username = decoded.username;
  }

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
        Welcome, {username}
        <button onClick={handleSignOut}>Logout</button>
      </div>
    </>
  );
};

export default Home;
