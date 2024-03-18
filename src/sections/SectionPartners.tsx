import { PartnerList } from '../components/partners/PartnerList';
import { Section } from '../components/shared/Section';
import { InfoPartner } from '../components/partners/InfoPartner';

export const SectionPartners = () => {
  return (
    <Section sectionId="partneri" sectionName="Partneři">
      <InfoPartner />
      <PartnerList />
    </Section>
  );
};
