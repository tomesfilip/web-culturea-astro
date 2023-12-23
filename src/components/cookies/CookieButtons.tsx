type Props = {
  handleDeclineCookies: () => void;
  handleAcceptCookies: () => void;
};

export const CookieButtons = ({
  handleDeclineCookies,
  handleAcceptCookies,
}: Props) => {
  return (
    <div className="buttons flex gap-x-4 gap-y-2 flex-wrap ">
      <button
        className="px-6 py-2 text-white border-white rounded-lg border-[1px] hover:bg-orange-1 transition duration-300"
        onClick={handleDeclineCookies}
      >
        Odmítnout
      </button>
      <button
        className="px-6 py-2 rounded-lg border-[1px] text-white hover:bg-orange-1 transition duration-300"
        onClick={handleAcceptCookies}
      >
        Přijmout cookies
      </button>
    </div>
  );
};
