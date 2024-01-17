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
        className="fixed bottom-2 right-2 m-3 p-4 rounded-full border-2 hover:bg-orange-1 border-orange-1 duration-300"
        >
          {isHovering ? (
            <img src={arrowTopHover} alt="Scroll to top" width={20} height={30} />
          ) : (
            <img src={arrowTop} alt="Scroll to top" width={20} height={30} />
          )}
        </button>
      </div>
    );
  };
  
  export default ScrollToTopButton;