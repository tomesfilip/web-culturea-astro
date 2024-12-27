import { Facebook, Instagram, Youtube } from '../icons/Socials';

interface Props {
  isWhiteColor?: boolean;
}

export const SocialList = ({ isWhiteColor }: Props) => {
  return (
    <div className="flex gap-6">
      <a
        href="https://www.instagram.com/culturea/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram isWhiteFill={isWhiteColor} />
      </a>
      <a
        href="https://www.facebook.com/Culturea"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook isWhiteFill={isWhiteColor} />
      </a>
      <a
        href="https://www.youtube.com/@jsmeculturea"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube isWhiteFill={isWhiteColor} />
      </a>
    </div>
  );
};
