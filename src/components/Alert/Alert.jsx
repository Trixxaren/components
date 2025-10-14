import styles from "./Alert.module.css";

const Alert = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.warning}>⚠️ {props.text} ⚠️</div>
    </div>
  );
};

export default Alert;
