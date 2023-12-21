import { AboutTextColumn } from '../components/about/AboutTextColumn';
import { Section } from '../components/shared/Section';

export const SectionAbout = () => {
  return (
    <Section sectionId="o-festivalu">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center text-white pb-40 px-4 lg:px-8 lg:gap-x-16 xl:gap-x-24 gap-y-12">
        <div className="w-full max-w-[500px] xl:max-w-[540px] order-2 lg:order-1">
          <h2 className="font-bold">O festivalu</h2>
          <AboutTextColumn />
        </div>
        <div className="relative order-1 lg:order-2 grid">
          <img
            src="/o-festivalu/x-challenge.jpg"
            alt="X Challenge"
            className="h-auto w-11/12 max-w-[500px] justify-self-start lg:justify-self-end"
          />
          <img
            src="/o-festivalu/tym.jpg"
            alt="O festivalu - tym"
            className="w-4/5 max-w-[300px] -mt-20 justify-self-end lg:justify-self-start"
          />
        </div>
      </div>
    </Section>
  );
};
