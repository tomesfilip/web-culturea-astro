import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import img1 from '../../assets/img/history/1.webp';
import img2 from '../../assets/img/history/2.webp';
import img3 from '../../assets/img/history/3.webp';
import img4 from '../../assets/img/history/4.webp';

import 'swiper/css';
import 'yet-another-react-lightbox/styles.css';
import '../../styles/carousel.css';

const images = [
  { id: 0, src: img1.src },
  { id: 1, src: img2.src },
  { id: 2, src: img3.src },
  { id: 3, src: img4.src },
];

export const LastYearSlider = () => {
  const [selectedImgId, setSelectedImgId] = useState(-1);

  return (
    <div className="w-full space-y-16">
      <Lightbox
        index={selectedImgId}
        open={selectedImgId >= 0}
        close={() => setSelectedImgId(-1)}
        slides={images}
      />
      <div className="relative overflow-hidden w-screen">
        <div className="carousel">
          {[...images, ...images].map(({ id, src }, index) => (
            <div
              key={`carousel-img-${id}-${index}`}
              className="max-w-[512px] max-h-[342px] px-4"
              onClick={() => setSelectedImgId(id)}
            >
              <img
                className="object-cover object-center cursor-pointer"
                src={src}
                width={512}
                height={342}
                loading="lazy"
                alt={src}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
