import { useRef } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import '../../styles/swiper.css';

import type { TTeamMemberItem } from '../../lib/types/TTeamMemberItem';
import { SwiperNavigationButton } from '../shared/SwiperNavigationButton';
import { TeamMemberItem } from './TeamMemberItem';
import { TeamMemberItemSwiper } from './TeamMemberItemSwiper';

type Props = {
  teamMembers: TTeamMemberItem[];
};

export const TeamMemberList = ({ teamMembers }: Props) => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <div className="w-full">
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-4 px-4 items-stretch">
        {teamMembers.map((member, index) => (
          <TeamMemberItem
            key={member.id}
            isEven={index % 2 === 0}
            {...member}
          />
        ))}
      </div>

      <div className="hidden lg:flex lg:h-[600px] xl:h-[680px] relative">
        <SwiperNavigationButton
          direction="left"
          onClick={() => swiperRef.current?.slidePrev()}
          isTopOffset
        />
        <SwiperNavigationButton
          direction="right"
          onClick={() => swiperRef.current?.slideNext()}
          isTopOffset
        />
        <TeamMemberItemSwiper isEven={index % 2 === 0} {...teamMember} />
      </div>
    </div>
  );
};
