import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider.jsx";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { IoIosLogOut } from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";
import { getMangaResponse } from "../libs/api-libs.js";
import MangaList from "../components/MangaList/page.jsx";

const Home = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const [topManga, setTopManga] = useState(null);

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

  useEffect(() => {
    const fetchTopManga = async () => {
      const mangaData = await getMangaResponse("top/manga", "limit=5");
      setTopManga(mangaData);
    };

    fetchTopManga();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="h-screen">
        <div className="flex p-4 items-center justify-between bg-[#100e34]">
          <h1 className="font-semibold text-2xl">
            Yuki<span className="text-[#f9d949]">nime</span>
          </h1>
          <div>
            <button onClick={handleSignOut}>
              <IoIosLogOut />
            </button>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="p-8">
            <h1 className="text-lg">Hola, {user} !</h1>
          </div>
          {topManga ? <MangaList api={topManga} /> : <p>Loading...</p>}
        </div>
      </div>
    </>
  );
};

export default Home;
