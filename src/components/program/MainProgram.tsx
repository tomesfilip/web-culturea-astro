import { ProgramItem } from './ProgramItem';

import { programItems } from '../../data/programItems';

import type { TProgramItem } from '../../lib/types/TProgramItem';

export const MainProgram = () => {
  return (
    <div className="my-8 lg:my-10 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-[1200px] mx-auto">
      {programItems.map(
        (
          { time, headline, img, presenter, place }: TProgramItem,
          index: number,
        ) => (
          <ProgramItem
            index={index}
            key={time}
            time={time}
            headline={headline}
            img={img}
            presenter={presenter}
            place={place}
            rightColumned={index % 2 !== 0}
          />
        ),
      )}
    </div>
  );
};
