import {
  basicPartners,
  generalPartners,
  mainPartners,
  medialPartners,
} from '../../data/partners';
import { SinglePartnerItem } from './SinglePartnerItem';

const allPartnerLists = [
  generalPartners,
  mainPartners,
  medialPartners,
  basicPartners,
];

export const PartnerList = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-12 py-12 px-4">
      {allPartnerLists.map(({ headline, partners }) => (
        <div className="space-y-6 w-full" key={headline}>
          <h3>{headline}</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partnerItem) => (
              <SinglePartnerItem key={partnerItem.img.src} {...partnerItem} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
