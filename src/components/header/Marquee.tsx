import '../../styles/marquee.css';

export const Marquee = () => {
  return (
    <div
      style={{
        backgroundImage: "url('./ripped_paper.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="relative overflow-hidden whitespace-nowrap text-[70px] w-full h-[220px] flex items-center bg-no-repeat"
    >
      <div className="marquee">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex">
            <span className="kuba font-bold text-[#19777A]">KUBA&nbsp;</span>
            <span className="maroko font-bold text-[#FE8133]">
              MAROKO&nbsp;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
