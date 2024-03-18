import type { TPartnerItem } from '../../lib/types/TPartnerItem';

type Props = {
  headline?: string;
} & TPartnerItem;

export const SinglePartnerItem = ({ headline, img, alt }: Props) => {
  return (
    <div className="space-y-4">
      {headline && (
        <h4 className="text-blue text-h2 text-center">{headline}</h4>
      )}
      <img
        src={img.src}
        alt={alt}
        width={400}
        height={300}
        className="h-[90px] object-contain"
        loading="lazy"
      />
    </div>
  );
};
