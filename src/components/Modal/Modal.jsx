import styles from "./Modal.module.css";
import { useState } from "react";

const Modal = ({ title, text, btn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <button onClick={toggleModal} className={styles.button}>
        {btn}
      </button>

      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button onClick={toggleModal} className={styles.closeBtn}>
              X
            </button>

            <h1 className={styles.header}>{title}</h1>
            <hr />
            <div className={styles.modalContent}>
              <p className={styles.paragraph}>{text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
