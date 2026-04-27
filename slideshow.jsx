import { useEffect, useRef, useState } from "react";

function Slideshow() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error loading images:", err));
  }, []);

  useEffect(() => {
    if (playing) {
      timerRef.current = setInterval(() => {
        setIndex((prevIndex) => {
          if (prevIndex === images.length - 1) {
            setPlaying(false);
            return prevIndex;
          }
          return prevIndex + 1;
        });
      }, 5000);
    }

    return () => clearInterval(timerRef.current);
  }, [playing, images.length]);

  const firstImage = () => setIndex(0);
  const lastImage = () => setIndex(images.length - 1);

  const nextImage = () => {
    setIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
  };

  const previousImage = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const playSlideshow = () => setPlaying(true);

  const stopSlideshow = () => {
    setPlaying(false);
    clearInterval(timerRef.current);
  };

  if (images.length === 0) {
    return <h2>Loading slideshow...</h2>;
  }

  return (
    <main className="slideshow-page">
      <h1>Cat API Slideshow</h1>

      <img
        src={images[index].url}
        alt={`Cat ${index + 1}`}
        className="slideshow-img"
      />

      <p>
        Image {index + 1} of {images.length}
      </p>

      <div className="slideshow-buttons">
        <button onClick={firstImage}>First</button>
        <button onClick={previousImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
        <button onClick={lastImage}>End</button>
        <button onClick={playSlideshow}>Play</button>
        <button onClick={stopSlideshow}>Stop</button>
      </div>
    </main>
  );
}

export default Slideshow;