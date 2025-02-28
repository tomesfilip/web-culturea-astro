import type { ImageMetadata } from 'astro';
import type { ReactNode } from 'react';

export interface MediaItemProps {
  img: ImageMetadata;
  imgAlt: string;
  link?: string;
  text?: string;
  children?: ReactNode;
}

export const MediaItem = ({
  img,
  imgAlt,
  link,
  text,
  children,
}: MediaItemProps) => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-8 max-w-[320px] w-full mx-auto">
      <img
        src={img.src}
        alt={imgAlt}
        width={100}
        height={100}
        className="size-[100px]"
      />
      {link && (
        <a
          key={link}
          href={link}
          className="flex flex-col items-center justify-center media-item xl:flex-row gap-x-4 xl:gap-x-8 gap-y-4 xl:gap-y-0 underline text-dark-green"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text && <h4 className="text-xl font-bold">{text}</h4>}
        </a>
      )}
      {children && (
        <div className="flex flex-col gap-2 max-w-max">{children}</div>
      )}
    </div>
  );
};