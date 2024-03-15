import type { TProgramItem } from '../../lib/types/TProgramItem';
import { programItemsHov } from '../../data/programItemsHov';
import { useState } from 'react';
import { motion } from 'framer-motion';

type Props = TProgramItem & {
  rightColumned?: boolean;
  index: number;
};

export const ProgramItem = ({
  time,
  headline,
  presenter,
  img,
  place,
  rightColumned,
  additionalInfo,
  index,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverContent = programItemsHov[index]?.content;

  const variants = {
    visible: { opacity: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0, transition: { duration: 1 } },
  };

  return (
    <div
      className={`w-[300px] h-[200px] lg:w-[400px] lg:h-[250px] border-2 px-5 rounded-md flex flex-col flex-wrap justify-center items-center gap-1 md:gap-3 text-center md:basis-1/2 md:text-left ${
        rightColumned
          ? 'md:pt-6 md:items-center border-blue-1'
          : 'md:pt-6 md:items-center border-orange-1'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered && (
        <div>
          <div className="mb-4">
            <p
              className={`font-bold text-center text-xl md:text-4xl ${
                rightColumned ? 'text-blue-1' : 'text-orange-1'
              }`}
            >
              {time}
            </p>
          </div>
          <div className="flex lg:justify-start gap-2">
            <div
              className={`flex-col text-left ${
                rightColumned
                  ? 'md:order-2 md:text-left'
                  : 'md:order-1 md:text-left'
              }`}
            >
              <p className="text-left font-bold text-lg md:text-xl">
                {presenter}
              </p>
              {headline && <p className="font-medium">{headline}</p>}
              {place && <p className="text-orange-1 font-medium">{place}</p>}
              {additionalInfo && <p className="text-sm">{additionalInfo}</p>}
            </div>
            {img && (
              <img
                src={img.src}
                alt={presenter}
                className={`rounded-full w-[90px] h-[90px]`}
              />
            )}
          </div>
        </div>
      )}

      {isHovered && hoverContent && (
        <motion.div
          initial="hidden"
          animate={isHovered ? 'visible' : 'hidden'}
          variants={variants}
          className={`p-2 flex justify-center items-center ${
            rightColumned ? 'text-blue-1' : 'text-orange-1'
          }`}
        >
          {hoverContent}
        </motion.div>
      )}
    </div>
  );
};
