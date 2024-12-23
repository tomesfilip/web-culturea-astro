import { SocialList } from '../components/footer/SocialList';
import { Section } from '../components/shared/Section';

export const SectionLanding = () => {
  return (
    <Section
      id="landing"
      className="text-white px-4 p-24 pb-12 lg:px-0 lg:pt-[96px] relative h-[70svh] md:h-[80svh] flex flex-col items-center justify-center bg-[url('/pozadi/hero-mob.svg')] md:bg-[url('/pozadi/hero.svg')] bg-cover bg-right-top md:bg-center bg-no-repeat mt-[96px]"
    >
      <div className="flex flex-col items-center mx-auto max-w-[400px] lg:max-w-none text-center">
        <h1 className="hidden">Irsko a Nový Zéland</h1>
        <div className="bg-beige text-dark-green max-w-[220px] md:max-w-[340px] py-12 rounded-tr-[400px] rounded-br-[400px] flex flex-col gap-8 md:gap-16 px-8 md:absolute md:bottom-0 md:-translate-x-1/3">
          <h2 className="text-4xl md:text-6xl text-left font-semibold">
            Irsko <br />& Nový Zéland
          </h2>
          <SocialList />
        </div>
      </div>
    </Section>
  );
};
