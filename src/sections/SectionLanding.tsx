import { SocialList } from '../components/footer/SocialList';
import { Marquee } from '../components/header/Marquee';
import { Section } from '../components/shared/Section';

export const SectionLanding = () => {
  return (
    <>
      <Section
        sectionId="landing"
        className="text-white px-4 py-12 lg:px-0 relative"
      >
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <SocialList />
        </div>
        <div className="flex flex-col items-center mx-auto max-w-[400px] lg:max-w-none text-center">
          <img
            src="/ikony/logo-znak.svg"
            alt="Logo"
            className="mb-8 w-32 h-auto"
          />
          <h1 className="hidden">Culturea 2024 - Kuba a Maroko</h1>
          <h2 className="text-[40px] lg:text-8xl font-bold mb-4">
            Kuba a Maroko
          </h2>
          <div className="text-xl lg:text-3xl flex flex-wrap justify-between gap-2 lg:gap-14 pb-20 mb-20 w-4/5 lg:w-max">
            <p className="order-2 lg:order-1">3. dubna</p>
            <p className="order1 lg:order-2 w-full lg:max-w-max">
              14|15 Baťův insititut kavárna
            </p>
            <p className="order-3 lg:order-3">12. ročník</p>
          </div>
          <div className="block lg:hidden">
            <SocialList />
          </div>
        </div>
      </Section>
      <Marquee />
    </>
  );
};
