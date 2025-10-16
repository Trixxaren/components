import styles from "./UserCard.module.css";

const UserCard = ({ name, age, color, img }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: color }}>
      <img
        src={img}
        alt={`Bild på ${name}`}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />
      <p>
        Jag heter {name} och är {age} år gammal.
      </p>
    </div>
  );
};

export default UserCard;
