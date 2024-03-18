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
        <div className="space-y-6">
          <h3>{headline}</h3>
          <div
            key={headline}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 xl:gap-x-12 gap-y-8 items-center justify-center"
          >
            {partners.map((partnerItem) => (
              <SinglePartnerItem key={partnerItem.img.src} {...partnerItem} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
