import cookieIcon from '../../assets/img/icons/cookie.svg?url';

export const CookieHeader = () => {
  return (
    <div className="cookie-header flex flex-wrap items-center gap-x-4">
      <img src={cookieIcon} alt="cookie ikona" width={80} height={80} />
      <h4 className="text-white md:text-2xl text-xl font-bold ">Cookie</h4>
    </div>
  );
};
