import type { TopicItemTypes } from '../../types/TopicItemTypes';

export const TopicArticle = ({
  headline,
  paragraphs,
  image,
  isReversed,
}: TopicItemTypes) => {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8">
      <img
        src={image}
        alt={headline}
        width={563}
        height={394}
        className={isReversed ? 'lg:order-2' : 'lg:order-1'}
      />
      <div
        className={`w-full max-w-[563px] ${
          isReversed ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        <h3 className="uppercase text-2xl lg:text-5xl pb-4">{headline}</h3>
        <div className="space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="uppercase text-lg leading-[22px]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};
