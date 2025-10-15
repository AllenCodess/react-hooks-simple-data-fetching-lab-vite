const DogImage = ({ loading, dogImage }) => {
  return (
    <div className="dog-image-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
};

export default DogImage;
