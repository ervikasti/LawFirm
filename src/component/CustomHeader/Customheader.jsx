import React from "react";
import styles from "./Customheader.module.css";

export const Customheader =({data})=>{
    return(
        <div className={styles.header}> 
            {data}
        </div>
    )
}