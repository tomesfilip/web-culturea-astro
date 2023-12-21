interface Props {
  handleDeclineCookies: () => void;
  handleAcceptCookies: () => void;
}

const CookieButtons = ({
  handleDeclineCookies,
  handleAcceptCookies,
}: Props) => {
  return (
    <div className="buttons flex gap-x-4 gap-y-2 flex-wrap ">
      <button
        className="px-6 py-2 text-white border-white rounded-lg border-[1px] hover:bg-flushOrange transition duration-300"
        onClick={handleDeclineCookies} 
      >
        Odmítnout
      </button>
      <button
        className="px-6 py-2 text-flushOrange rounded-lg border-[1px] text-white hover:bg-flushOrange transition duration-300"
        onClick={handleAcceptCookies}
      >
        Přijmout cookies
      </button>
    </div>
  );
};

export default CookieButtons;
