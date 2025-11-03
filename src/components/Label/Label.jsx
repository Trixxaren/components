import React from "react";
import styles from './Label.module.css';

const Label = (props) => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>{props.name}</p>
        </div>
    )
}

export default Label;