import { useState } from "react";
import styles from "./Carousel.module.css";

export default function Carousel({ items = [], ariaLabel = "Carousel" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!Array.isArray(items) || items.length === 0) {
    return (
      <div className={styles.empty} role="region" aria-label={ariaLabel}>
        Lägg till JSX-innehåll i prop <code>items</code>.
      </div>
    );
  }

  const nextSlide = () => setCurrentIndex((p) => (p + 1) % items.length);
  const prevSlide = () =>
    setCurrentIndex((p) => (p - 1 + items.length) % items.length);

  return (
    <div className={styles.container} role="region" aria-label={ariaLabel}>
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((content, i) => (
            <div className={styles.slide} key={i}>
              {content}
            </div>
          ))}
        </div>
      </div>

      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={prevSlide}
        aria-label="Föregående"
      >
        ‹
      </button>
      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={nextSlide}
        aria-label="Nästa"
      >
        ›
      </button>

      <div className={styles.dots}>
        {items.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${
              i === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
