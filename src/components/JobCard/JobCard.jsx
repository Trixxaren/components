import styles from "./JobCard.module.css";
import bg from "../../assets/JobCard2.jpg"; // <- ändra path så den matchar din struktur

const JobCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <UserCard
          name="Robin"
          lastname="Vikström"
          company="Amazon"
          number="070-4121212"
          email="Robin@gmail.com"
        />
        <UserCard
          name="Emma"
          lastname="Hoff"
          company="Google"
          number="070-4131313"
          email="Emma@gmail.com"
        />
      </div>
    </div>
  );
};

const UserCard = (props) => {
  return (
    <article
      className={styles.userCard}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header className={styles.userHeader}>
        <h3 className={styles.userName}>
          {props.name} {props.lastname}
        </h3>
        <p className={styles.company}>{props.company}</p>
      </header>

      <footer className={styles.userInfo}>
        <p className={styles.line}>
          <span className={styles.label}>Telefon:</span> {props.number}
        </p>
        <p className={styles.line}>
          <span className={styles.label}>E-post:</span> {props.email}
        </p>
      </footer>
    </article>
  );
};

export default JobCard;
