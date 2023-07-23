import { useEffect, useState } from 'react';
import 'lightgallery/css/lightgallery.css';
import lightGallery from 'lightgallery';

function ArtGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // List of image names in the directory
    const imageNames = Array.from({ length: 10 }, (_, i) => `image${i + 1}.jpg`);

    setImages(imageNames.map(name => `/images/artGallery/${name}`));

    const gallery = document.getElementById('my-gallery');
    images.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      img.setAttribute('data-src', src);
      img.setAttribute('data-sub-html', '');
      gallery.appendChild(img);
    });

    lightGallery(gallery);
  }, [images]);

  return (
    <div id="my-gallery" style={{ display: 'none' }}>
      {/* Images will be appended here */}
    </div>
  );
}

export default ArtGallery;
