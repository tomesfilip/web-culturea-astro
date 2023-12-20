import { socialItems } from '../../data/footerItems';

import SocialItem from './SocialItem';

const SocialList = () => {
  return (
    <div className="socials-container">
      <div className="flex flex-col gap-6 opacity-50">
        {socialItems.map(({ imgSrc, imgAlt, socLink }) => (
          <SocialItem
            key={socLink}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            socLink={socLink}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialList;
