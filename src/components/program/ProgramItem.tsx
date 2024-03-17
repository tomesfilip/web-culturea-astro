import { motion } from 'framer-motion';
import { useState } from 'react';
import type { TProgramItem } from '../../lib/types/TProgramItem';

type Props = TProgramItem & {
  rightColumned?: boolean;
};

export const ProgramItem = ({
  time,
  headline,
  presenter,
  img,
  place,
  rightColumned,
  additionalInfo,
  content,
}: Props) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const variants = {
    visible: { opacity: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0, transition: { duration: 1 } },
  };

  const toggleContent = (state: boolean) => {
    if (content) {
      setIsContentVisible(state);
    }
  };

  return (
    <div
      className={`w-full h-[250px] max-w-[400px] border-2 rounded-md flex flex-col flex-wrap items-center gap-1 md:gap-3 text-center md:basis-1/2 md:text-left md:items-center justify-self-center ${
        rightColumned ? 'border-blue-1' : 'border-orange-1'
      } ${isContentVisible ? 'justify-center p-4' : 'justify-start px-4 py-8'}`}
      onMouseEnter={() => toggleContent(true)}
      onMouseLeave={() => toggleContent(false)}
      onClick={() => toggleContent(!isContentVisible)}
    >
      {!isContentVisible && (
        <div className="space-y-6">
          <p
            className={`font-bold text-center text-xl md:text-4xl ${
              rightColumned ? 'text-blue-1' : 'text-orange-1'
            }`}
          >
            {time}
          </p>
          <div className="flex lg:justify-start gap-2">
            <div
              className={`flex-col text-left md:text-left ${
                rightColumned ? 'md:order-2' : 'md:order-1'
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
                alt={presenter ?? 'prezentující'}
                width={90}
                height={90}
                className="rounded-full w-[90px] h-[90px]"
                loading="lazy"
              />
            )}
          </div>
        </div>
      )}

      {isContentVisible && content && (
        <motion.div
          initial="hidden"
          animate={isContentVisible ? 'visible' : 'hidden'}
          variants={variants}
          className={`flex justify-center items-center ${
            rightColumned ? 'text-blue-1' : 'text-orange-1'
          }`}
        >
          {content}
        </motion.div>
      )}
    </div>
  );
};
