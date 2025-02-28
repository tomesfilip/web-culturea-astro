import { ContactItem } from '../components/footer/ContactItem';
import { UtbLogo } from '../components/icons/UtbLogo';
import { Section } from '../components/shared/Section';

export const SectionOrganizer = () => {
  return (
    <Section id="kontakty" className="bg-beige">
      <div className="w-full max-w-screen-lg mx-auto space-y-12 md:space-y-20">
        <div className="space-y-4 md:space-y-8">
          <h3 className="text-dark-green">Kontakt</h3>
          <div className="w-full flex flex-col md:flex-row justify-between gap-y-4 gap-x-10">
            <ContactItem
              name="Aneta Skácelová"
              position="Manažerka projektu"
              mail="ahoj@culturea.cz"
              phone="(+420) 724 919 193"
            />
            <ContactItem
              name="Ondřej Staněk"
              position="Obsahový a technický správce"
              mail="ostanek@utb.cz"
              phone="(+420) 724 919 193"
            />
          </div>
        </div>
        <div className="flex flex-col md:items-center">
          <a
            href="https://fmk.utb.cz/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-max"
          >
            <UtbLogo />
          </a>
        </div>
      </div>
    </Section>
  );
};
