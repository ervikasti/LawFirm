import React from "react";
import { Hsection1 } from "./Section/HSection1/HSection1";
import styles from "./Home.module.css"
import { HSection2 } from "./Section/HSection2/HSection2";
import { HSection3 } from "./Section/HSection3/HSection3";
import { HSection5 } from "./Section/HSection5/HSection5";

export const Home =()=>{
    return (
        <div className={styles.home}>
            <Hsection1></Hsection1>
            <HSection2></HSection2>
            <HSection3></HSection3>
            <HSection5></HSection5>
        </div>
    )
}