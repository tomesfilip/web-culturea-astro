import { AboutTextColumn } from '../components/about/AboutTextColumn';
import { Section } from '../components/shared/Section';

import aboutImg1 from '../assets/img/about/about-1.webp';
import aboutImg2 from '../assets/img/about/about-2.webp';
import aboutImg3 from '../assets/img/about/about-3.webp';

export const SectionAbout = () => {
  return (
    <Section id="o-festivalu" className="bg-light-green">
      <div className="flex flex-col xl:flex-row justify-between text-beige gap-x-24 gap-y-12 py-52">
        <div className="w-full max-w-[500px] lg:max-w-[600px]">
          <h3 className="font-bold text-4xl mb-2">O festivalu</h3>
          <AboutTextColumn />
        </div>
        <div className="relative grid grid-cols-1 gap-2 lg:gap-4 place-items-center w-full xl:w-auto">
          <div className="translate-x-4 lg:-translate-x-12">
            <img
              src={aboutImg1.src}
              alt="Culturea 2024"
              className="h-auto w-full max-w-[258px] md:max-w-[430px]"
            />
          </div>
          <img
            src={aboutImg2.src}
            alt="Culturea 2024"
            className="w-full max-w-[248px] md:max-w-[430px] -translate-x-8 lg:-translate-x-24"
          />
          <div className="-mt-6 lg:-mt-20 z-[2]">
            <img
              src={aboutImg3.src}
              alt="Culturea 2024"
              className="w-full max-w-[280px] md:max-w-[420px]"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
