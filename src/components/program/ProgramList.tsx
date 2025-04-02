import React from "react";
import { ProgramData } from "../../data/ProgramData";
import ProgramCard from "./ProgramCard";

interface ProgramListProps {
  startId: number;
  endId: number;
}

const ProgramList: React.FC<ProgramListProps> = ({ startId, endId }) => {
  // Filter the ProgramData to include only the range of IDs between startId and endId
  const filteredData = ProgramData.filter(
    (program) => program.id >= startId && program.id <= endId
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {filteredData.map((program) => (
        <ProgramCard
          key={program.id}
          time={program.time}
          bgColor={program.bgColor}
          title={program.title}
          description={program.description}
          imageSrc={program.imageSrc}
          expandedDescription={program.expanded}
        />
      ))}
    </div>
  );
};

export default ProgramList;
