import { useState } from "react";
import styles from "./Avatar.module.css";

const Avatar = ({ name, src, size = 80 }) => {
  const [imgOk, setImgOk] = useState(Boolean(src));
  const [hovered, setHovered] = useState(false);

  const label = typeof name === "string" ? name.trim() : String(name || "");
  const initials =
    label
      ?.split(" ")
      ?.map((w) => w[0])
      ?.join("")
      ?.toUpperCase() || "?";

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {imgOk ? (
        <img
          src={src}
          alt={label}
          className={styles.avatar}
          style={{ width: size, height: size }}
          onError={() => setImgOk(false)}
        />
      ) : (
        <div
          className={styles.placeholder}
          style={{
            width: size,
            height: size,
            fontSize: Math.max(14, size * 0.3),
          }}
        >
          {initials}
        </div>
      )}
      {hovered && <div className={styles.tooltip}>{label}</div>}
    </div>
  );
};

export default Avatar;
