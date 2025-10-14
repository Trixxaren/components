import React, { useState, useId } from "react";
import styles from "./AccordionPro.module.css";

/**
 * Props:
 * - items: Array<{ title: string | ReactNode, content: string | ReactNode }>
 * - defaultOpen: number (index) eller -1
 * - allowMultiple: boolean
 *
 * Klass-overrides (alla valfria):
 * - className: root
 * - headerClassName, titleClassName, chevronClassName
 * - panelClassName, contentClassName
 * - itemClassName: wrapper för varje item
 * - titleAs: "h2" | "h3" | ... (semantik för rubriken)
 */
export default function AccordionPro({
  items = [],
  defaultOpen = -1,
  allowMultiple = false,

  className = "",
  itemClassName = "",
  headerClassName = "",
  titleClassName = "",
  chevronClassName = "",
  panelClassName = "",
  contentClassName = "",
  titleAs = "h3",
}) {
  const baseId = useId();
  const [openSet, setOpenSet] = useState(() =>
    defaultOpen >= 0 ? new Set([defaultOpen]) : new Set()
  );

  const H = titleAs; // dynamiskt rubrikelement

  const toggle = (idx) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (allowMultiple) {
        next.has(idx) ? next.delete(idx) : next.add(idx);
        return next;
      }
      return next.has(idx) ? new Set() : new Set([idx]);
    });
  };

  return (
    <div className={`${styles.root} ${className}`}>
      {items.map((it, idx) => {
        const isOpen = openSet.has(idx);
        const headerId = `${baseId}-hdr-${idx}`;
        const panelId = `${baseId}-panel-${idx}`;

        return (
          <div className={`${styles.item} ${itemClassName}`} key={idx}>
            <button
              id={headerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(idx)}
              className={`${styles.header} ${headerClassName}`}
            >
              <H className={`${styles.title} ${titleClassName}`}>{it.title}</H>
              <span
                className={`${styles.chevron} ${
                  isOpen ? styles.open : ""
                } ${chevronClassName}`}
              >
                ▾
              </span>
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className={`${styles.panel} ${panelClassName}`}
              >
                <div className={`${styles.content} ${contentClassName}`}>
                  {it.content}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
