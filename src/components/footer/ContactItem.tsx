interface Props {
  name: string;
  position: string;
  mail: string;
  phone: string;
}

export const ContactItem = ({ name, position, mail, phone }: Props) => {
  return (
    <div className="md:space-y-4 text-dark-green">
      <h4 className="font-bold text-lg md:text-2xl">{name}</h4>
      <div className="">
        <p>{position}</p>
        <a className="block" href={`mailto:${mail}`}>
          {mail}
        </a>
        <a className="block" href={`tel:${phone}`}>
          {phone}
        </a>
      </div>
    </div>
  );
};
