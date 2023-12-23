import { ProgramItem } from './ProgramItem';

import type { TProgramItem } from '../../types/TProgramItem';

import { extraProgramItems } from '../../data/programItems';

export const ExtraProgram = () => {
  return (
    <div className="my-8">
      <h4 className="text-orange-1 text-xl md:text-2xl font-bold mb-4">
        DOPROVODNÝ PROGRAM
      </h4>
      {extraProgramItems.map(
        (
          {
            time,
            headline,
            img,
            presenter,
            place,
            additionalInfo,
          }: TProgramItem,
          index: number,
        ) => (
          <ProgramItem
            key={time}
            time={time}
            headline={headline}
            img={img}
            presenter={presenter}
            place={place}
            rightColumned={index % 2 === 0}
            additionalInfo={additionalInfo}
          />
        ),
      )}
    </div>
  );
};
