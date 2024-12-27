import type { TPartnerItem } from '../../lib/types/TPartnerItem';

type Props = {
  headline?: string;
} & TPartnerItem;

export const SinglePartnerItem = ({ headline, img, alt, link }: Props) => {
  const imageElement = link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={img.src}
        alt={alt}
        width={400}
        height={300}
        className="max-h-[90px] object-contain h-auto"
        loading="lazy"
      />
    </a>
  ) : (
    <img
      src={img.src}
      alt={alt}
      width={400}
      height={300}
      className="max-h-[90px] object-contain h-auto"
      loading="lazy"
    />
  );

  return (
    <div className="space-y-4">
      {headline && (
        <h4 className="text-blue text-h2 text-center">{headline}</h4>
      )}
      {imageElement}
    </div>
  );
};
