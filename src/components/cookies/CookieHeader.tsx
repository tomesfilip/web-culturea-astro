import cookieIcon from '../../assets/img/icons/cookie.svg';

const CookieHeader = () => {
  return (
    <div className="cookie-header flex flex-wrap items-center gap-x-4">
      {/* Use Tailwind's utility classes for background images */}
      <div className="bg-contain bg-center bg-no-repeat w-12 h-12" style={{ backgroundImage: `url(${cookieIcon})` }} aria-label="cookie icon"></div>
      <h4 className="text-white md:text-2xl text-xl font-bold">Cookies</h4>
    </div>
  );
};

export default CookieHeader;

