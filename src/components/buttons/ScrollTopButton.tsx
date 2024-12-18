export const ScrollToTopButton = () => {
  return (
    <a
      href="#"
      className="fixed bottom-4 right-4 m-3 p-4 rounded-full border-4 hover:bg-dark-green border-dark-green duration-300 group"
    >
      <svg
        className="stroke-dark-green group-hover:stroke-beige"
        width="50"
        height="50"
        viewBox="0 0 235 131"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 121L121 9.99999" strokeWidth="20" strokeLinecap="round" />
        <path d="M224.071 121L121 10" strokeWidth="20" strokeLinecap="round" />
      </svg>
    </a>
  );
};
