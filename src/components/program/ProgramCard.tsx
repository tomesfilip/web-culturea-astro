import React, { useState, useRef, useEffect } from "react";

interface ProgramProps {
  time: string;
  title: string;
  description?: string;
  expandedDescription?: string; // New prop for expanded description
  bgColor: string; // Optional background color prop
  imageSrc?: any; // Optional image URL
}

const ProgramCard: React.FC<ProgramProps> = ({ time, title, description, expandedDescription, bgColor, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // New state to handle mobile expand/collapse
  const cardRef = useRef<HTMLDivElement>(null); // Ref for the card

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded); // Toggle expanded state on mobile
  };

  // Effect to handle clicks outside the card
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsExpanded(false); // Close expanded description if clicked outside
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cardRef]);

  return (
    <div
      ref={cardRef} // Attach the ref to the card
      className={`relative bg-${bgColor} text-beige py-8 shadow-lg flex flex-col items-center w-full text-center`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={toggleExpanded}
    >
      {/* Time positioned at the top quarter, full width */}
      <div className="w-full absolute top-1/5">
        <h2 className="text-3xl md:text-4xl font-bold text-center">{time}</h2>
      </div>

      {/* Content Section */}
      <div className={`mt-16 flex items-center w-full px-6 pb-8 md:pb-0 ${imageSrc ? "text-left" : "text-center flex-col"}`}>
        {imageSrc && <img src={imageSrc.src} alt={title} className="w-16 h-16 object-cover mr-4" />}
        <div className={`flex-1 ${imageSrc ? "text-left" : "text-center"}`}>
          <h3 className="text-base md:text-2xl font-semibold">{title}</h3>
          <p className="text-base mt-1">{description}</p>
        </div>
      </div>

      {/* Desktop Layout (Visible only on medium screens and above) */}
      <div className="hidden md:block w-full">
        {expandedDescription && (
          <div
            className={`absolute left-0 bottom-0 w-full min-h-48 text-left flex items-center bg-beige text-dark-green p-6 shadow-2xl transition-all duration-300 ease-in-out ${
              isHovered
                ? "translate-y-full opacity-100 z-10"
                : "translate-y-0 opacity-0 z-[-1]"
            }`}
          >
            <div className="relative w-full flex items-center">
              <p className="text-base whitespace-pre-line w-4/5">{expandedDescription}</p>
            </div>
            <div className={`absolute right-0 top-4 bottom-4 h-auto w-4 bg-${bgColor} z-50`} />
          </div>
        )}
      </div>

      {/* Mobile Layout (Visible only on small screens) */}
      <div className="md:hidden w-full">
        <div className="absolute bottom-4 right-4 md:hidden">
          <button className="bg-transparent text-white px-4 py-2 rounded-md">
            více → {/* Clicking this will trigger the expanded description */}
          </button>
        </div>

        {/* Expanded Description for Mobile */}
        {expandedDescription && (
          <div
            className={`absolute left-0 bottom-0 w-full min-h-48 text-left flex items-center bg-beige text-dark-green p-6 pb-12 shadow-2xl transition-all duration-300 ease-in-out ${
              isExpanded
                ? "translate-x-0 opacity-100 z-10"
                : "translate-x-full opacity-0 z-[-1]"
            }`}
            onClick={toggleExpanded}
          >
            <div className="relative w-full flex items-center">
              <p className="text-base whitespace-pre-line w-4/5">{expandedDescription}</p>
            </div>
            <div className={`absolute right-0 top-4 bottom-4 h-auto w-4 bg-${bgColor} z-50`} />
            <div className="absolute bottom-4 right-4 md:hidden">
              <button className="bg-transparent text-dark-green px-4 py-2 rounded-md">
                ← méně {/* Clicking this will collapse the expanded description */}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramCard;
