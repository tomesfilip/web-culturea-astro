import arrowTop from '../../../public/ikony/scroll-top.svg?url';
import arrowTopHover from '../../../public/ikony/scroll-top-hover.svg?url';
import { useState } from 'react';

const ScrollToTopButton = () => {
  const [isHovering, setIsHovering] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="fixed bottom-2 right-2 m-3 p-4 rounded-full border-4 hover:bg-orange-1 border-orange-1 duration-300"
      >
        {isHovering ? (
          <svg
            width="50"
            height="50"
            viewBox="0 0 235 131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 121L121 9.99999"
              stroke="white"
              stroke-width="20"
              stroke-linecap="round"
            />
            <path
              d="M224.071 121L121 10"
              stroke="white"
              stroke-width="20"
              stroke-linecap="round"
            />
          </svg>
        ) : (
          <svg
            width="50"
            height="50"
            viewBox="0 0 235 131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 121L121 9.99999"
              stroke="#FF8A00"
              stroke-width="20"
              stroke-linecap="round"
            />
            <path
              d="M224.071 121L121 10"
              stroke="#FF8A00"
              stroke-width="20"
              stroke-linecap="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ScrollToTopButton;
