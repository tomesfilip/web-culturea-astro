import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import { CookieButtons } from '../cookies/CookieButtons';
import { CookieContent } from '../cookies/CookieContent';
import { CookieHeader } from '../cookies/CookieHeader';

export const CookieBanner = () => {
  const [showCookieBanner, setShowCookieBanner] = useState<boolean>(false);

  const handleAcceptCookies = (expirationDays: number = 120) => {
    Cookies.set('essential', 'true', { expires: expirationDays, path: '/' });
    setShowCookieBanner(false);
  };

  useEffect(() => {
    setShowCookieBanner(!(Cookies.get('essential') === 'true'));
  }, []);

  return (
    <>
      {showCookieBanner && (
        <div className="fixed bottom-10 right-1/2 translate-x-1/2 md:-translate-x-10 md:right-10 flex flex-col border-[1px] border-white bg-blue-2 p-6 w-[94%] md:max-w-[460px] rounded-lg z-20">
          <CookieHeader />
          <CookieContent />
          <CookieButtons
            handleDeclineCookies={() => setShowCookieBanner(false)}
            handleAcceptCookies={() => handleAcceptCookies()}
          />
        </div>
      )}
    </>
  );
};
