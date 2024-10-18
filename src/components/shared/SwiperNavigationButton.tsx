type Props = {
  direction: 'left' | 'right';
  onClick: () => void;
  isTopOffset?: boolean;
};

export const SwiperNavigationButton = ({
  direction,
  onClick,
  isTopOffset,
}: Props) => {
  return (
    <button
      className={`bg-orange-1 p-2 rounded-full absolute z-10  
      ${direction === 'left' ? 'left-0' : 'right-0'}
      ${
        isTopOffset
          ? 'top-[40%] -translate-y-[40%]'
          : 'top-1/2 -translate-y-1/2'
      }`}
      onClick={onClick}
      aria-label={
        direction === 'left'
          ? 'zobraz předchozí obrázky'
          : 'zobraz následující obrázky'
      }
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={direction === 'left' ? 'rotate-180' : 'rotate-0'}
      >
        <path
          d="M9.33757 30.3226L23.6602 16"
          stroke="white"
          strokeWidth="2.58065"
          strokeLinecap="round"
        />
        <path
          d="M9.33757 1.67742L23.6602 16"
          stroke="white"
          strokeWidth="2.58065"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};
