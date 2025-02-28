import { useState, useEffect } from 'react';
import { TICKET_PRE_SALE_DATE } from '../../data/ticketsDate';  // Import the date

export const TicketButton = () => {
  const [isPreSaleActive, setIsPreSaleActive] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    // Compare the current date with the presale date
    setIsPreSaleActive(currentDate < TICKET_PRE_SALE_DATE);
  }, []);

  return isPreSaleActive ? (
    <button
      className="bg-light-brown text-beige text-lg md:text-xl font-semibold shadow-lg tracking-wide px-6 md:px-8 py-4 rounded-full z-[2]"
      disabled
    >
      Předprodej od 10.&nbsp;3.
    </button>
  ) : (
    <a
      href="https://goout.net/cs/culturea-2024-kuba-a-maroko/szvkiyw/?fbclid=IwAR3gnWDZeNbQjYbE_CcB1XF2QyoKacsquY5akQHM_0Ghj5q19ZZ3wB9nSVM"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-light-brown text-beige text-lg md:text-xl font-semibold shadow-lg tracking-wide px-6 md:px-8 py-4 rounded-full z-[2] hover:bg-dark-brown transition-colors duration-300"
    >
      Vstupenky
    </a>
  );
};
