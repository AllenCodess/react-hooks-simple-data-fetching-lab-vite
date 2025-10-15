const FetchButton = ({ fetchDogImage }) => {
  return (
    <button onClick={fetchDogImage}>
      Get a New Dog Image
    </button>
  );
};

export default FetchButton;
