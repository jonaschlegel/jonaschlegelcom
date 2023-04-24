import 'lightgallery/css/lightgallery.css';
import lightGallery from 'lightgallery';
import { useEffect } from 'react';

function ArtGallery() {
  useEffect(() => {
    async function fetchImages() {
      const response = await fetch('/api/art-gallery-images');
      const data = await response.json();

      const gallery = document.getElementById('my-gallery');
      data.images.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.setAttribute('data-src', src);
        img.setAttribute('data-sub-html', '');
        gallery.appendChild(img);
      });

      lightGallery(gallery);
    }

    fetchImages();
  }, []);

  return (
    <div id="my-gallery" style={{ display: 'none' }}>
      {/* Images will be appended here */}
    </div>
  );
}

export default ArtGallery;
