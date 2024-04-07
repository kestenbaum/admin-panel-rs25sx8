import { FC, ReactElement } from 'react';
import './popup.css';
interface PopupDefaultTypes {
  showModal: boolean;
  setShowModal: (open: boolean) => void;
  children: ReactElement;
}

const PopupDefault: FC<PopupDefaultTypes> = ({ children, setShowModal, showModal }) => {
  const modalActiveStyle = showModal ? 'modal active' : 'modal';
  const wrapperActiveStyle = showModal ? 'wrapper active' : 'wrapper';

  return (
    <section className={modalActiveStyle} onClick={() => setShowModal(false)}>
      <div className={wrapperActiveStyle} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </section>
  );
};

export default PopupDefault;
