import { ProgramItem } from './ProgramItem';

import { programItems } from '../../data/programItems';

export const MainProgram = () => {
  return (
    <div className="my-8 lg:my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-[1200px] mx-auto justify-center items-center px-4">
      {programItems.map((programItem, index) => (
        <ProgramItem
          key={programItem.time}
          rightColumned={index % 2 !== 0}
          {...programItem}
        />
      ))}
    </div>
  );
};
