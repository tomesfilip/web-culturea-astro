import { TICKET_PRE_SALE_DATE } from "../../data/ticketsDate"; // Import the date

export const TicketButton = () => {
  const currentDate = new Date();
  const isPreSaleActive = currentDate < TICKET_PRE_SALE_DATE;

  return isPreSaleActive ? (
    <button
      className="bg-light-brown text-beige font-semibold shadow-lg tracking-wide px-4 sm:px-6 md:px-8 py-3 rounded-full z-[2] 
                 text-center break-words leading-tight max-w-[180px] sm:max-w-[220px] md:max-w-[260px]"
      style={{ fontSize: "clamp(12px, 3.5vw, 18px)" }} // Shrinks first, wraps if needed
      disabled
    >
      Předprodej od 10.&nbsp;3.
    </button>
  ) : (
    <a
      href="https://www.smsticket.cz/vstupenky/54799-culturea-2025-zlinsky-zamek-zlin"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-light-brown text-beige font-semibold shadow-lg tracking-wide px-4 sm:px-6 md:px-8 py-3 rounded-full z-[2] 
                 text-center break-words leading-tight max-w-[180px] sm:max-w-[220px] md:max-w-[260px] hover:bg-dark-brown transition-colors duration-300"
      style={{ fontSize: "clamp(12px, 3.5vw, 18px)" }} // Shrinks first, wraps if needed
    >
      Vstupenky
    </a>
  );
};
