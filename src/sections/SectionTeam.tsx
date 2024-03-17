import { Section } from '../components/shared/Section';
import { TeamMemberList } from '../components/team/TeamMemberList';

import { teamMemberItems } from '../data/teamMemberItems';

export const SectionTeam = () => {
  return (
    <Section sectionId="tym" sectionName="Kontakty" className="px-4">
      <TeamMemberList teamMembers={teamMemberItems} />
    </Section>
  );
};
