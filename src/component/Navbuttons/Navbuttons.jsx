import React from "react";
import styles from "./Navbuttons.module.css";

export const Navbuttons = ({data}) =>{
    return (
        <div>
            {data.map( (name,i) => (<button key={i} className={styles.navbuttons} >{name}</button>))}
        </div>
    )
}