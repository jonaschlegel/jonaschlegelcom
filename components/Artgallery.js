import 'lightgallery/css/lightgallery.css';
import lightGallery from 'lightgallery';
import { useEffect, useState } from 'react';

function TagMenu({ tags, activeTags, onTagToggle }) {
  return (
    <div className="tag-menu" style={{ marginBottom: '10px' }}>
      {tags.map((tag) => (
        <button
          key={tag}
          className={activeTags.includes(tag) ? 'active' : ''}
          onClick={() => onTagToggle(tag)}
          style={{
            fontSize: '12px',
            padding: '5px 10px',
            margin: '2px',
            borderRadius: '5px',
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

function ArtGallery() {
  const [images, setImages] = useState([]);
  const [activeTags, setActiveTags] = useState([]);
  const galleryRef = useRef(null);

  useEffect(() => {
    const imageData = [
      {
        src: '/images/artGallery/image1.jpg',
        tags: ['Bell Beaker', 'cup', 'pencil drawing'],
      },
      {
        src: '/images/artGallery/image2.jpg',
        tags: ['female figurine', 'pencil drawing', 'Venus of Willendorf'],
      },
      {
        src: '/images/artGallery/image3.jpg',
        tags: ['Ancient Rome', 'statue', 'torso', 'colour'],
      },
      {
        src: '/images/artGallery/image4.jpg',
        tags: ['ink drawing', 'archaeological disciplines', 'educational'],
      },
      {
        src: '/images/artGallery/image5.jpg',
        tags: ['ink drawing', 'Venus of Willendorf', 'female figurine'],
      },
      {
        src: '/images/artGallery/image6.jpg',
        tags: ['Ancient Greek', 'Kore', 'statue', 'colour', 'reconstruction'],
      },
      {
        src: '/images/artGallery/image7.jpg',
        tags: ['colour', 'oil drawing', 'statue', 'Eastern Islands'],
      },
      {
        src: '/images/artGallery/image8.jpg',
        tags: ['stippling', 'female figurine', 'Venus of Kostyonki'],
      },
      {
        src: '/images/artGallery/image9.jpg',
        tags: ['Ancient Crete', 'colour', 'educational'],
      },
      {
        src: '/images/artGallery/image10.jpg',
        tags: ['stratigraphy', 'educational'],
      },
      {
        src: '/images/artGallery/image11.jpg',
        tags: ['Bell Beaker', 'educational', 'zine'],
      },
      {
        src: '/images/artGallery/image12.jpg',
        tags: ['Venus of Willendorf', 'colour', 'female figurine'],
      },
      {
        src: '/images/artGallery/image13.jpg',
        tags: ['statue', 'Ancient Rome', 'colour'],
      },
      {
        src: '/images/artGallery/image14.jpg',
        tags: ['Bell Beaker', 'educational', 'ink drawing'],
      },
      {
        src: '/images/artGallery/image15.jpg',
        tags: ['wall', 'educational', 'colour'],
      },
      {
        src: '/images/artGallery/image16.jpg',
        tags: ['concept drawing', 'stippling', 'Bronze Age', 'Europe'],
      },
      {
        src: '/images/artGallery/image17.jpg',
        tags: ['reconstruction', 'stippling', 'burial', 'female'],
      },
      {
        src: '/images/artGallery/image18.jpg',
        tags: ['bone tools', 'educational', 'deer'],
      },
      {
        src: '/images/artGallery/image19.jpg',
        tags: ['artist', 'educational'],
      },
      {
        src: '/images/artGallery/image20.jpg',
        tags: ['colour', 'Dolmen', 'landscape'],
      },
      {
        src: '/images/artGallery/image21.jpg',
        tags: ['concept drawing', 'colour', 'stippling'],
      },
      {
        src: '/images/artGallery/image22.jpg',
        tags: ['reconstruction', 'house', 'Neolithic', 'colour'],
      },
      {
        src: '/images/artGallery/image23.jpg',
        tags: ['colour', 'Ancient map', 'reconstruction'],
      },
      {
        src: '/images/artGallery/image24.jpg',
        tags: ['stippling', 'Eye Idol'],
      },
      {
        src: '/images/artGallery/image25.jpg',
        tags: ['colour', 'goat', 'vessel', 'Ancient Rome'],
      },
      {
        src: '/images/artGallery/image26.jpg',
        tags: ['colour', 'reconstruction', 'comb', 'ancient'],
      },
      {
        src: '/images/artGallery/image27.jpg',
        tags: ['torso', 'Ancient Rome', 'pencil drawing'],
      },
      {
        src: '/images/artGallery/image28.jpg',
        tags: ['ink drawing', 'Venus of Kostyonki', 'female figurine'],
      },
      {
        src: '/images/artGallery/image29.jpg',
        tags: ['zine', 'educational'],
      },
      {
        src: '/images/artGallery/image30.jpg',
        tags: ['concept drawing', 'stippling', 'Funnelbeaker'],
      },
      {
        src: '/images/artGallery/image31.jpg',
        tags: ['stone', 'Runestone', 'colour'],
      },
      {
        src: '/images/artGallery/image32.jpg',
        tags: ['stippling', 'Neolithic', 'vessel'],
      },
      {
        src: '/images/artGallery/image33.jpg',
        tags: ['posthole', 'educational', 'line drawing'],
      },
      {
        src: '/images/artGallery/image34.jpg',
        tags: ['stone', 'flint', 'colour'],
      },
      {
        src: '/images/artGallery/image35.jpg',
        tags: ['skeleton', 'mouse', 'colour'],
      },
      {
        src: '/images/artGallery/image36.jpg',
        tags: ['stippling', 'torso', 'Ancient Rome', 'statue'],
      },
    ];
    setImages(imageData);
  }, []);

  function toggleTag(tag) {
    setActiveTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag],
    );
  }

  const filteredImages =
    activeTags.length > 0
      ? images.filter((image) =>
          activeTags.every((tag) => image.tags.includes(tag)),
        )
      : images;

  useEffect(() => {
    if (gallery) {
      gallery.innerHTML = '';

      filteredImages.forEach((image) => {
        const img = document.createElement('img');
        img.src = image.src;
        img.setAttribute('data-src', image.src);
        img.setAttribute('data-sub-html', image.tags.join(', '));
        img.style.width = '100%';
        img.style.height = 'auto';
        gallery.appendChild(img);
      });

      lightGallery(gallery);
    }
  }, [filteredImages]);

  const allTags = Array.from(new Set(images.flatMap((image) => image.tags)));

  return (
    <div>
      <TagMenu tags={allTags} activeTags={activeTags} onTagToggle={toggleTag} />
      <div
        ref={galleryRef}
        id="my-gallery"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gridGap: '10px',
          alignItems: 'center',
        }}
      ></div>
    </div>
  );
}

export default ArtGallery;
