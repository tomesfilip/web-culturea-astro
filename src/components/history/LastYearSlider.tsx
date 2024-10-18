import { useRef, useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Lightbox from 'yet-another-react-lightbox';
import img1 from '../../assets/img/history/1.webp';
import img2 from '../../assets/img/history/2.webp';
import img3 from '../../assets/img/history/3.webp';
import img4 from '../../assets/img/history/4.webp';
import { SwiperNavigationButton } from '../shared/SwiperNavigationButton';

import 'swiper/css';
import 'yet-another-react-lightbox/styles.css';
import '../../styles/swiper.css';

const images = [
  { id: 0, src: img1.src },
  { id: 1, src: img2.src },
  { id: 2, src: img3.src },
  { id: 3, src: img4.src },
];

export const LastYearSlider = () => {
  const [selectedImgId, setSelectedImgId] = useState(-1);
  const swiperRef = useRef<SwiperCore>();

  return (
    <div className="w-full space-y-16">
      <div className="w-full text-center text-white">
        <p className="text-xl leading-none lg:text-[45px] uppercase xl:leading-[60px] font-headline">
          Kuba a Maroko
        </p>
        <p className="text-xl leading-none lg:text-[45px] font-bold xl:leading-[60px] font-headline">
          2024
        </p>
      </div>
      <Lightbox
        index={selectedImgId}
        open={selectedImgId >= 0}
        close={() => setSelectedImgId(-1)}
        slides={images}
      />
      <div className="relative flex flex-col items-center">
        <div className="2xl:hidden block">
          <SwiperNavigationButton
            direction="left"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <SwiperNavigationButton
            direction="right"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
        <Swiper
          loop
          autoHeight
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            800: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1500: {
              slidesPerView: 4,
            },
          }}
        >
          {images.map(({ id, src }) => (
            <SwiperSlide key={id} onClick={() => setSelectedImgId(id)}>
              <div className="max-w-[512px] max-h-[342px] px-4">
                <img
                  className="object-cover object-center cursor-pointer"
                  src={src}
                  width={512}
                  height={342}
                  loading="lazy"
                  alt={src}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
