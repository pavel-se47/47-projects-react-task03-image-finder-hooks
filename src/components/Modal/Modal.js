import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const rootModal = document.querySelector('#root-modal');

export default function Modal({ addToggleModal, children }) {
  useEffect(() => {
    const closeModalByEsc = e => {
      if (e.code === 'Escape') {
        addToggleModal();
      }
    };

    window.addEventListener('keydown', closeModalByEsc);

    return () => {
      window.removeEventListener('keydown', closeModalByEsc);
    };
  }, [addToggleModal]);

  const closeModalByClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      addToggleModal();
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={closeModalByClickBackdrop}>
      <div className={styles.modal}>{children}</div>
    </div>,
    rootModal
  );
}
