import React from "react";
import styles from "./Navbuttons.module.css";

export const Navbuttons = ({names}) =>{
    return (
        <div>
            {names.map( (name,i) => (<button key={i} className={styles.navbuttons} >{name}</button>))}
        </div>
    )
}