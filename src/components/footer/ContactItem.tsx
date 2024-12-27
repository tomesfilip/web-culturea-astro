interface Props {
  name: string;
  position: string;
  mail: string;
  phone: string;
}

export const ContactItem = ({ name, position, mail, phone }: Props) => {
  return (
    <div className="space-y-4">
      <h4 className="font-bold mb-4 text-2xl">{name}</h4>
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
