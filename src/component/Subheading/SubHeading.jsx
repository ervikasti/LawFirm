import React from "react";
import styles from "./SubHeading.module.css";

export const SubHeading = ({children}) => {
    return(
        <div className={styles.sub_heading_container}>
            <p className={styles.sub_heading}>{children}</p>
        </div>
    )
}