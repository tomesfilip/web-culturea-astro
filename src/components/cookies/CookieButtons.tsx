type Props = {
  handleDeclineCookies: () => void;
  handleAcceptCookies: () => void;
};

export const CookieButtons = ({
  handleDeclineCookies,
  handleAcceptCookies,
}: Props) => {
  return (
    <div className="buttons flex gap-x-4 gap-y-2 flex-wrap">
      <button
        className="px-6 py-2 border-black rounded-lg border-[1px]"
        onClick={handleDeclineCookies}
      >
        Odmítnout
      </button>
      <button
        className="px-6 py-2 rounded-lg bg-light-brown transition duration-300"
        onClick={handleAcceptCookies}
      >
        Přijmout cookies
      </button>
    </div>
  );
};
