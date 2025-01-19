interface Props {
  className: string;
}

export const GalleryActiveIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      viewBox="0 0 90 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_240_202)">
        <path
          d="M89.1289 0.883789L45.4363 46.3194C70.0466 45.8381 89.6103 25.4979 89.1289 0.883789Z"
          fill="#DDA15E"
        />
        <path
          d="M89.1289 0.883789L45.4363 46.3194C44.955 21.7091 64.5148 1.36515 89.1289 0.883789Z"
          fill="#6A994E"
        />
        <path
          d="M-0.000646563 2.62688L45.435 46.3195C20.8209 46.8009 0.480712 27.241 -0.000646563 2.62688Z"
          fill="#6A994E"
        />
        <path
          d="M-0.000646563 2.62688L45.435 46.3195C44.9537 21.7092 24.6096 2.14559 -0.000646563 2.62688Z"
          fill="#DDA15E"
        />
      </g>
      <defs>
        <clipPath id="clip0_240_202">
          <rect
            width="44.5726"
            height="89.1453"
            fill="white"
            transform="translate(89.1289 0.883789) rotate(88.8797)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
