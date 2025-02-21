type Props = {
  closeModal: () => void;
};

export const ModalHeader = ({ closeModal }: Props) => {
  return (
    <div className="modal-header flex justify-end w-full">
      <button className="outline-none" onClick={closeModal}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 5L5 25"
            stroke="black"
            stroke-width="4.16667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 5L25 25"
            stroke="black"
            stroke-width="4.16667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
