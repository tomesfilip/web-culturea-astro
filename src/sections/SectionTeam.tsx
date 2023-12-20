import { Section } from '../components/shared/Section';
import TeamMemberList from '../components/team/TeamMemberList';

import { teamMemberItems } from '../data/teamMemberItems';

export const SectionTeam = () => {
  return (
    <Section sectionId="tym" sectionName="Kontakty">
      <TeamMemberList teamMembers={teamMemberItems} />
    </Section>
  );
};
