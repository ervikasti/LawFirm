import React from "react";
import styles from "./Ourteamcard.module.css";


export const Ourteamcard = ({data})=> {
    const imgL = data.img;
    // console.log(data.img);
    const imgl = Object.values(imgL);
    // console.log(imgl);

    return(
        <div className={styles.container}>
            <div className={styles.img}>
                <img src={imgl} alt={data.name}/>
            </div>
             <div className={styles.details}>
                <h3>{data.name}</h3>
                <small>{data.desc}</small>
            </div>     
        </div>
    )
}