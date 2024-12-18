import type { ImageMetadata } from 'astro';

interface Props {
  img: ImageMetadata;
  link: string;
}

export const SponsorItem = ({ img, link }: Props) => {
  return (
    <a href={link} target="_blank">
      <img src={img.src} width={120} height={80} alt="sponsor-logo" />
    </a>
  );
};
