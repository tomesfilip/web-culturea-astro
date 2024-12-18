import { AboutTextColumn } from '../components/about/AboutTextColumn';
import { Section } from '../components/shared/Section';

export const SectionAbout = () => {
  return (
    <Section id="o-festivalu" className="bg-light-green">
      <div className="flex flex-wrap justify-between text-beige lg:gap-x-16 xl:gap-x-24 gap-y-12 py-52">
        <div className="w-full max-w-[500px] xl:max-w-[540px] order-2 lg:order-1">
          <h3 className="font-bold text-4xl mb-2">O festivalu</h3>
          <AboutTextColumn />
        </div>
        <div className="relative order-1 lg:order-2 grid">
          <img
            src="/o-festivalu/x-challenge.webp"
            alt="X Challenge"
            className="h-auto w-11/12 max-w-[500px] justify-self-start lg:justify-self-end"
          />
          <img
            src="/o-festivalu/tym.webp"
            alt="O festivalu - tym"
            className="w-4/5 max-w-[300px] -mt-20 justify-self-end lg:justify-self-start"
          />
        </div>
      </div>
    </Section>
  );
};
