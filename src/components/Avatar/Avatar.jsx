import { useState } from "react";
import styles from "./Avatar.module.css";

const Avatar = (name, src) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const [hovered, setIsHovered] = useState(false);

  return (
    <div
      className="avatar-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {src ? (
        <img src={src} alt={name} className="avatar" />
      ) : (
        <div className="avatar-placeholder">{initials}</div>
      )}

      {hovered && <div className="avatar-tooltip">{name}</div>}
    </div>
  );
};

export default Avatar;
