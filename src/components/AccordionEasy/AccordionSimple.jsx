import styles from "./AccordionSimple.module.css";
import { useState } from "react";

const AccordionSimple = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev); // ← rätt: toggla från föregående state
  };

  return (
    <div className={styles.accordion}>
      <button onClick={toggleAccordion} className={styles.header}>
        <span className={styles.title}>{title}</span>
        <span className={`${styles.chevron} ${isOpen ? styles.open : ""}`}>
          ▾
        </span>
      </button>

      {isOpen && (
        <div className={styles.content}>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionSimple;
