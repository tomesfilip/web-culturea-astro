import closeIcon from '../../assets/img/icons/close-icon.svg';

type Props = {
  closeModal: () => void;
};

export const ModalHeader = ({ closeModal }: Props) => {
  return (
    <div className="modal-header flex justify-end w-full">
      <button className="outline-none" onClick={closeModal}>
        <img src={closeIcon.src} alt="zavřít okno - ikona" />
      </button>
    </div>
  );
};
