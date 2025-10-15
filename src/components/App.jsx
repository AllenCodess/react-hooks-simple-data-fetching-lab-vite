import { useState, useEffect } from 'react';
import DogImage from './DogImage';
import FetchButton from './FetchButton';

function App() {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch dog image function (used in useEffect and button click)
  const fetchDogImage = () => {
    setLoading(true);
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setDogImage(data.message);  // data.message is the image URL
        setLoading(false);
      })
      .catch(() => {
        setDogImage(''); // Clear image on error or you could set an error state
        setLoading(false);
      });
  };

  // Fetch once on mount
  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div className="app">
      <h1>Random Dog Image</h1>
      <DogImage loading={loading} dogImage={dogImage} />
      <FetchButton fetchDogImage={fetchDogImage} />
    </div>
  );
}

export default App;
