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
      className="text-white text-center px-5 py-3 text-[20px] xl:text-[24px] rounded-xl border border-white font-headline"
      disabled
    >
      Předprodej od 10.&nbsp;3.
    </button>
  ) : (
    <a
      href="https://goout.net/cs/culturea-2024-kuba-a-maroko/szvkiyw/?fbclid=IwAR3gnWDZeNbQjYbE_CcB1XF2QyoKacsquY5akQHM_0Ghj5q19ZZ3wB9nSVM"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-center px-5 py-3 text-[20px] xl:text-[24px] rounded-xl border border-white font-headline hover:text-light-brown hover:border-light-brown transition-colors duration-300"
    >
      Koupit vstupenku
    </a>
  );
};
