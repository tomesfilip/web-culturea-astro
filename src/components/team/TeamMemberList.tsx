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
    <>
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-4 px-4">
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
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop
          autoHeight
          grabCursor
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            720: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {teamMembers.map((teamMember, index) => (
            <SwiperSlide key={teamMember.id}>
              <TeamMemberItemSwiper isEven={index % 2 === 0} {...teamMember} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
