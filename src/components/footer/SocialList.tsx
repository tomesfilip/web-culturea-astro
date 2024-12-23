import { Facebook, Instagram, Youtube } from '../icons/Socials';

export const SocialList = () => {
  return (
    <div className="flex gap-6">
      <a
        href="https://www.instagram.com/culturea/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram />
      </a>
      <a
        href="https://www.facebook.com/Culturea"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
      </a>
      <a
        href="https://www.youtube.com/@jsmeculturea"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube />
      </a>
    </div>
  );
};
