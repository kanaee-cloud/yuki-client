import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider.jsx";

const Home = () => {
  const navigate = useNavigate;
  const { logout } = useAuth();
  const handleSignOut = () => {
    console.log("Sign out clicked");
    logout();
    navigate("/");
  };
  return (
    <div className="h-screen">
    Home
    <button onClick={handleSignOut}>Logout</button>
    </div>
  ) ;
    
};

export default Home;
