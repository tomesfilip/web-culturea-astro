import { SocialList } from '../components/footer/SocialList';
import { Section } from '../components/shared/Section';

export const SectionLanding = () => {
  return (
    <>
      <Section
        sectionId="landing"
        className="text-white px-4 p-24 pb-12 lg:px-0 relative"
      >
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block z-[2]">
          <SocialList />
        </div>
        <div className="flex flex-col items-center mx-auto max-w-[400px] lg:max-w-none text-center">
          <img
            src="/ikony/logo-znak.svg"
            alt="Logo"
            className="mb-8 w-32 h-auto"
          />
          <h1 className="hidden">ODHALENÍ ZEMÍ 13. ROČNÍKU JIŽ BRZY!</h1>
          <h2 className="text-2xl lg:text-6xl font-bold mb-4 max-w-[600px]">
            ODHALENÍ ZEMÍ 13. ROČNÍKU JIŽ BRZY!
          </h2>
          <div className="text-xl lg:text-3xl flex flex-wrap justify-around gap-5 lg:gap-14 pb-20 mb-20 w-5/5 lg:w-max">
            <a
              className="underline"
              target="_blank"
              href="https://www.instagram.com/culturea/"
            >
              Sleduj nás na Instagramu
            </a>
            {/* <p className="order-2 lg:order-1">3. dubna 2024</p>
            <p className="order1 lg:order-2 w-full lg:max-w-max">
              14|15 Baťův institut kavárna, Zlín
            </p>
            <p className="order-3 lg:order-3">13. ročník</p> */}
          </div>
          <div className="block lg:hidden">
            <SocialList />
          </div>
        </div>
      </Section>
    </>
  );
};
