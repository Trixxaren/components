import styles from "./Alert.module.css";

const Alert = (props) => {
  return (
    <div className={styles.container}>
      <div style={{backgroundColor: props.color,
       border: "1px solid black",
        color: "white",
        padding: "8px",
        borderRadius: "7px",
        fontWeight: "bold",

      }} >⚠️ {props.text} ⚠️</div>
      
      
      </div>
   
  );
};

export default Alert;
