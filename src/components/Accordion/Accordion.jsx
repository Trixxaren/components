import { useState } from "react";
import styles from "./Accordion.module.css";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const items = [
    {
      q: "What is React?",
      a: "React is a JavaScript library for building user interfaces. It lets you create reusable UI components and manage their state efficiently.",
    },
    {
      q: "What are React Hooks?",
      a: "React Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8.",
    },
    {
      q: "What is JSX?",
      a: "JSX is a syntax extension for JavaScript that lets you write HTML-like code in your JavaScript files.",
    },
  ];

  return (
    <div className={styles.root}>
      

      {items.map((it, i) => {
        const isOpen = openIndex === i;
        const panelId = `acc-panel-${i}`;
        return (
          <div key={i} className={styles.item}>
            <button
              className={`${styles.accordion} ${isOpen ? styles.active : ""}`}
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className={styles.label}>{it.q}</span>
              <span className={styles.chevron} aria-hidden="true" />
            </button>

            <div
              id={panelId}
              className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
              role="region"
            >
              <div className={styles.panelInner}>
                <p>{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
