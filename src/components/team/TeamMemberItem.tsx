interface Props {
  name: string;
  position: string;
  email: string;
  img: ImageMetadata;
  phone: string;
  isEven: boolean;
}

export const TeamMemberItem = ({
  name,
  img,
  position,
  email,
  phone,
  isEven,
}: Props) => {
  return (
    <figure className="h-full flex flex-col max-w-[285px]">
      <img
        className="object-cover object-center h-full"
        src={img.src}
        width={400}
        height={500}
        loading="lazy"
        alt={name}
      />
      <figcaption
        className={`py-2 text-lg font-bold text-white text-left pl-5 ${
          isEven ? 'bg-light-green' : 'bg-dark-brown'
        }`}
      >
        <span className="mb-2 name text-bold text-xl">{name}</span>
        <h4 className="mb-0 text-base md:text-lg font-normal">{position}</h4>
        <a
          className="block text-base md:text-lg font-normal"
          href={`mailto:${email}`}
        >
          {email}
        </a>
        <a
          className="block uppercase text-base md:text-lg font-normal"
          href={`tel:${phone}`}
        >
          {phone}
        </a>
      </figcaption>
    </figure>
  );
};
