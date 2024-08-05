import PropTypes from 'prop-types';

const MangaList = ({ api }) => {
  console.log("MangaList Props:", api); // Logging props
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-6">
      {api.data?.map((manga, index) => (
        manga.images?.jpg?.image_url ? (
          <div key={index}>
            <img src={manga.images.jpg.image_url} alt="" />
          </div>
        ) : (
          <div key={index}>
            <p>No image available</p>
          </div>
        )
      ))}
    </div>
  );
}

MangaList.propTypes = {
  api: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        images: PropTypes.shape({
          jpg: PropTypes.shape({
            image_url: PropTypes.string,
          }),
        }),
      })
    ),
  }).isRequired,
};

export default MangaList;
