import { InfoPartner } from '../components/partners/InfoPartner';
import { PartnerList } from '../components/partners/PartnerList';
import { Section } from '../components/shared/Section';

export const SectionPartners = () => {
  return (
    <Section id="partneri" title="Partneři">
      <InfoPartner />
      <PartnerList />
    </Section>
  );
};
