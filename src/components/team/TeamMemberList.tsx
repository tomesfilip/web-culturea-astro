import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import '../../styles/swiper.css';

import type { TTeamMemberItem } from '../../lib/types/TTeamMemberItem';
import { TeamMemberItem } from './TeamMemberItem';
import { TeamMemberItemSwiper } from './TeamMemberItemSwiper';

type Props = {
  teamMembers: TTeamMemberItem[];
};

export const TeamMemberList = ({ teamMembers }: Props) => {
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

      <div className="hidden lg:flex lg:h-[680px]">
        <Swiper
          modules={[Navigation]}
          navigation
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
