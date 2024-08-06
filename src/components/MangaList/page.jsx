

const MangaList = ({ api }) => {
  console.log("MangaList Props:", api); // Logging props
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-6">
      {api.data?.map((manga, index) =>
        manga.images?.jpg?.image_url ? (
          <div 
            key={index} 
            className="relative group transition-all hover:scale-110"
          >
            <img 
              src={manga.images.jpg.image_url} 
              alt={manga.title} 
              className="w-full h-[42vh] rounded-md object-cover transition-all hober:scale-110"
            />
            <div className="absolute inset-0 p-4 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center transition-opacity duration-300">
              <p className="text-sm text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">{manga.title}</p>
            </div>
          </div>
        ) : (
          <div key={index}>
            <p>No image available</p>
          </div>
        )
      )}
    </div>
  );
};

export default MangaList;
