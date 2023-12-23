import type { TTeamMemberItem } from '../../types/TTeamMemberItem';

type Props = {
  isEven: boolean;
} & TTeamMemberItem;

export const TeamMemberItem = ({
  name,
  img,
  position,
  email,
  phone,
  isEven,
}: Props) => {
  return (
    <figure className="rounded-lg">
      <img
        className="object-cover object-center rounded-t-lg opacity-70 hover:opacity-100 transition-opacity duration-300"
        src={img.src}
        width={400}
        height={500}
        loading="lazy"
        alt={name}
      />
      <figcaption
        className={`py-2 text-lg font-bold text-white rounded-b-lg capitalize text-left pl-5 ${
          isEven ? 'bg-orange-1' : 'bg-blue-1'
        }`}
      >
        <span className="mb-2 name text-bold text-xl uppercase">{name}</span>
        <h4 className="mb-0 uppercase text-base md:text-lg font-normal">
          {position}
        </h4>
        <a
          className="block uppercase text-base md:text-lg font-normal"
          href={`mailto:${email}`}
        >
          <img
            src="/ikony/letter-icon.png"
            alt="Mail ikona"
            className="inline-block mr-2 mb-2 w-6 h-6"
          />
          {email}
        </a>
        <a
          className="block uppercase text-base md:text-lg font-normal"
          href={`tel:${phone}`}
        >
          <img
            src="/ikony/phone-icon.png"
            alt="Telefon ikona"
            className="inline-block mr-2 w-6 h-6"
          />
          {phone}
        </a>
      </figcaption>
    </figure>
  );
};
