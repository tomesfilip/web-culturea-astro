import '../../styles/marquee.css';

export const Marquee = () => {
  return (
    <div className="relative overflow-hidden whitespace-nowrap text-3xl lg:text-[70px] w-full h-[100px] lg:h-[220px] xl:h-[240px] flex items-center bg-[url('/pozadi/desktop/ripped-paper.webp')] bg-cover bg-center bg-no-repeat">
      <div className="marquee">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex">
            <span className="kuba font-bold text-blue-1">KUBA&nbsp;</span>
            <span className="maroko font-bold text-orange-1">MAROKO&nbsp;</span>
          </div>
        ))}
      </div>
    </div>
  );
};
