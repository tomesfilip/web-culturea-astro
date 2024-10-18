import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import type { TTeamMemberItem } from '../../lib/types/TTeamMemberItem';

type Props = {
  isEven: boolean;
} & TTeamMemberItem;

export const TeamMemberItemSwiper = ({
  name,
  img,
  position,
  email,
  phone,
  isEven,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <figure
      className="rounded-lg h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="object-cover object-center rounded-t-lg opacity-70 hover:opacity-100 transition-opacity duration-300 w-full h-[500px]"
        src={img.src}
        width={400}
        height={500}
        loading="lazy"
        alt={name}
      />
      <motion.figcaption
        className={`py-2 text-lg font-bold text-white rounded-b-lg capitalize text-left pl-5 ${
          isEven ? 'bg-orange-1' : 'bg-blue-1'
        }`}
        animate={{
          height: isHovered ? '162px' : '80px',
        }}
      >
        <span className="mb-2 name text-bold text-xl uppercase">{name}</span>
        <h4
          className={clsx(
            'mb-0 uppercase text-lg font-normal',
            !isHovered && 'line-clamp-1',
          )}
        >
          {position}
        </h4>
        <AnimatePresence>
          {isHovered && (
            <motion.div>
              <a
                className="block uppercase font-normal"
                href={`mailto:${email}`}
              >
                <img
                  src="/ikony/letter-icon.png"
                  alt="Mail ikona"
                  className="inline-block mr-2 mb-2 size-6"
                />
                {email}
              </a>
              <a className="block uppercase font-normal" href={`tel:${phone}`}>
                <img
                  src="/ikony/phone-icon.png"
                  alt="Telefon ikona"
                  className="inline-block mr-2 size-6"
                />
                {phone}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.figcaption>
    </figure>
  );
};
