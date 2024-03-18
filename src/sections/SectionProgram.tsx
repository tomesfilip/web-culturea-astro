// import { ExtraProgram } from '../components/program/ExtraProgram';
import { MainProgram } from '../components/program/MainProgram';
import { Section } from '../components/shared/Section';
import { InfoBannerProgram } from '../components/program/InfoBannerProgram';

export const SectionProgram = () => {
  return (
    <Section sectionId="program" sectionName="Program">
      {/* <p className="text-xl">Program moderuje Slávek Král</p> */}
      <MainProgram />
      {/* <ExtraProgram /> */}
      <InfoBannerProgram />
    </Section>
  );
};
