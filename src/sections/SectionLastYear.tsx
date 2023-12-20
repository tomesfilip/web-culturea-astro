import { LastYearSlider } from '../components/history/LastYearSlider';

import { Section } from '../components/shared/Section';

import '../styles/dashedBorder.css';

export const SectionLastYear = () => {
  return (
    <Section
      sectionId="historie"
      sectionName="Minulý ročník"
      background="./pozadi_galerie.jpg"
      className="py-8"
      headlineClassName="text-white"
    >
      <LastYearSlider />
    </Section>
  );
};
