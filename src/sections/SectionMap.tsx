import { MapSvg } from '../components/map/MapSvg';
import { Section } from '../components/shared/Section';

export const SectionMap = () => {
  return (
    <Section
      id="mapa"
      title="Země, které jsme s Cultureou navštívili"
      className="bg-beige"
      headlineClassName="text-dark-green"
    >
      <MapSvg />
    </Section>
  );
};
