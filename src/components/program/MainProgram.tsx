import { ProgramItem } from './ProgramItem';

import { programItems } from '../../data/programItems';

import type { TProgramItem } from '../../types/TProgramItem';

export const MainProgram = () => {
  return (
    <div className="my-8 lg:my-10 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 w-full max-w-[1200px] mx-auto">
      {programItems.map(
        (
          { time, headline, img, presenter, place }: TProgramItem,
          index: number,
        ) => (
          <ProgramItem
            key={time}
            time={time}
            headline={headline}
            imgSrc={img?.src}
            presenter={presenter}
            place={place}
            rightColumned={index % 2 !== 0}
          />
        ),
      )}
    </div>
  );
};
