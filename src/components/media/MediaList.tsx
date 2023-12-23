import type { TMediaItem } from '../../types/TMediaItem';

type Props = {
  mediaList: TMediaItem[];
};

export const MediaList = ({ mediaList }: Props) => {
  return (
    <div className="flex flex-col flex-wrap justify-center xl:flex-row gap-y-8">
      {mediaList.map(({ img, imgAlt, text, link }) => (
        <a
          key={text}
          href={link}
          className="flex flex-col items-center justify-center media-item xl:flex-row gap-x-4 xl:gap-x-8 gap-y-4 xl:gap-y-0 xl:w-1/2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={img.src} alt={imgAlt} width={100} height={100} />
          <h4 className="text-xl font-bold text-orange-1">{text}</h4>
        </a>
      ))}
    </div>
  );
};
