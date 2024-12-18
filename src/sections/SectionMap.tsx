import { MapSvg } from '../components/map/MapSvg';
import { Section } from '../components/shared/Section';

export const SectionMap = () => {
  return (
    <Section id="mapa" title="">
      <h2 className="text-center hidden md:flex">
        země, které jsme s Cultureou navštívili
      </h2>
      <MapSvg />
    </Section>
  );
};
