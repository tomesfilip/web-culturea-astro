import { Section } from '../components/shared/Section';

export const SectionOrganizer = () => {
  return (
    <Section sectionId="kontakty" sectionName="">
      <a
        href="https://fmk.utb.cz/en/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/ikony/fmk-logo.svg"
          alt="UTB - Fakulta multimediálních komunikací"
          width={674}
          height={185}
          className="mx-auto"
        />
      </a>
    </Section>
  );
};
