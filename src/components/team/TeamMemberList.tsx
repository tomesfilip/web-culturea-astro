import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/pagination'
import 'swiper/css'
import 'swiper/css/navigation'
import '../../styles/swiper.css'

import type { TTeamMemberItem } from '../../lib/types/TTeamMemberItem'

interface Props {
  teamMembers: TTeamMemberItem[]
}

const TeamMemberList = ({ teamMembers }: Props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      // pagination={{ clickable: true }}
      autoHeight={true}
      grabCursor={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
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
        <SwiperSlide key={index}>
          <figure className="flex flex-col justify-center mx-2 2xl:mx-8 text-center rounded-lg">
            <div>
            <img
              className="object-cover object-center rounded-t-lg opacity-70 hover:opacity-100 transition-opacity duration-300 "
              src={teamMember.img}
              width={400}
              height={500}
              loading="lazy"
              alt={teamMember.name}
            />
            
            <figcaption
              className="py-2 text-lg font-bold text-white bg-flushOrange rounded-b-lg capitalize  text-left pl-5"
              style={{ backgroundColor: index % 2 === 0 ? '#DE5C0F' : '#19777A' }}
            >
              <span className="mb-2 name text-bold text-2xl uppercase">
                {teamMember.name}
              </span>
              <h4 className="mb-0 uppercase font-normal">
                {teamMember.position}
              </h4>
              <a
                className="block uppercase font-normal"
                href={`mailto:${teamMember.email}`}
              >
                {teamMember.email}
              </a>
              <a
                className="block uppercase font-normal"
                href={`tel:${teamMember.phone}`}
              >
                {teamMember.phone}
              </a>
            </figcaption>
            </div>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default TeamMemberList
