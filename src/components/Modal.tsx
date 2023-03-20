import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Modalstyles from '@/styles/Modal.module.css'


const Modal = ({ show, onClose, children, title }: any) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={Modalstyles.StyledModalOverlayFixed}>
      <div className={Modalstyles.StyledModal}>
        <div className={Modalstyles.StyledModalHeader}>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>
        {/* {title && <p className={Modalstyles.StyledModalTitle}>{title}</p>} */}
        <div className={Modalstyles.StyledModalBody}>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root') as any
    );
  } else {
    return null;
  }
};



export default Modal;