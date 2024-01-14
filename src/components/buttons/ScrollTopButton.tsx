import arrowTop from '../../../public/ikony/scroll-top.svg?url';
import arrowTopHover from '../../../public/ikony/scroll-top-hover.svg?url';
import { useState } from 'react';

const ScrollToTopButton = () => {
  const [isHovering, setIsHovering] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const baseStyle = {
    borderColor: 'orange',
    transition: 'background-color 0.2s ease',
  };
  
  const hoverStyle = {
    ...baseStyle,
    backgroundColor: 'orange', 
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={isHovering ? hoverStyle : baseStyle}
        className="fixed bottom-2 right-2 m-3 p-4 rounded-full border-2"
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
