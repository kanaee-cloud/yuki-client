import { useEffect, useState } from "react";

// import { IoIosLogOut } from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";
import { getMangaResponse } from "../libs/api-libs.js";
import MangaList from "../components/MangaList/page.jsx";
import { useAuth } from "../contexts/AuthProvider.jsx";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  const { user } = useAuth();
  const [topManga, setTopManga] = useState(null);



  useEffect(() => {
    const fetchTopManga = async () => {
      const mangaData = await getMangaResponse("top/manga", "limit=10");
      setTopManga(mangaData);
    };

    fetchTopManga();
  }, []);

  return (
    <>
      
      <div className="h-screen">
        <Navbar />
        <div className="container mx-auto">
          <div className="p-8">
            <div className="p-4">
              <h1 className="text-lg font-semibold">Hola, <span className="text-[#f9d949]">{user}</span> !</h1>
            </div>
            <div className="p-6 box ">
              {topManga ? <MangaList api={topManga} /> : <p>Loading...</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
