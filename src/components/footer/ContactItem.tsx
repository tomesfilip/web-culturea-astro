import type { TContactItem } from '../../lib/types/TContactItem';

export const ContactItem = ({ contactName, contactMail }: TContactItem) => {
  return (
    <div
      className="contact-item text-[19px] text-center xl:text-left"
      key={contactName}
    >
      <h4 className="font-bold">{contactName}</h4>
      <a href={`mailto:${contactMail}`}>{contactMail}</a>
    </div>
  );
};
