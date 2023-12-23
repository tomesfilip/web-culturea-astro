import { socialItems } from '../../data/footerItems';

import { SocialItem } from './SocialItem';

export const SocialList = () => {
  return (
    <div className="flex flex-row lg:flex-col gap-6 opacity-50">
      {socialItems.map(({ imgSrc, imgAlt, socLink }) => (
        <SocialItem
          key={socLink}
          imgSrc={imgSrc}
          imgAlt={imgAlt}
          socLink={socLink}
        />
      ))}
    </div>
  );
};
