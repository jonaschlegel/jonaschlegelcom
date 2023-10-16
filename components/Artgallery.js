import 'lightgallery/css/lightgallery.css';
import lightGallery from 'lightgallery';
import { useEffect, useState } from 'react';

function ArtGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // List of image names in the directory
    const imageNames = Array.from(
      { length: 21 },
      (_, i) => `image${i + 1}.jpg`,
    );

    setImages(imageNames.map((name) => `/images/artGallery/${name}`));

    const gallery = document.getElementById('my-gallery');

    // Cleanup function to remove existing images
    return () => {
      while (gallery.firstChild) {
        gallery.firstChild.remove();
      }
    };
  }, []);

  useEffect(() => {
    const gallery = document.getElementById('my-gallery');
    images.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      img.setAttribute('data-src', src);
      img.setAttribute('data-sub-html', '');
      img.style.width = '100%'; // Make the image responsive
      img.style.height = 'auto'; // Keep the aspect ratio
      gallery.appendChild(img);
    });

    lightGallery(gallery);
  }, [images]);

  return (
    <div
      id="my-gallery"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gridGap: '10px',
        alignItems: 'center', // Align items vertically in the middle
      }}
    >
      {/* Images will be appended here */}
    </div>
  );
}

export default ArtGallery;
