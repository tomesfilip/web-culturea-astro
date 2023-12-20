import SocialList from '../components/footer/SocialList';
import { Marquee } from '../components/header/Marquee';

export const SectionTopicHeader = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat py-16 flex items-center flex-wrap  text-center text-white my-10">
      <div className="pl-14">
        <SocialList />
      </div>

      <div className="flex flex-col items-center m-auto ">
        <img src="/logo_znak.svg" alt="Logo" className="mb-8 w-32 h-auto" />
        <h2 className="text-8xl font-bold mb-4">Kuba a Maroko</h2>
        <div className="text-3xl flex content-between gap-14 pb-20 mb-20">
          <p>3. dubna</p>
          <p>14|15 Baťův insititut kavárna</p>
          <p>12. ročník</p>
        </div>
      </div>
      <Marquee />
    </div>
  );
};
