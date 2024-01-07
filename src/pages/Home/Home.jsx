import React from "react";
import { Hsection1 } from "./Section/HSection1/HSection1";
import styles from "./Home.module.css"
import { HSection2 } from "./Section/HSection2/HSection2";
import { HSection3 } from "./Section/HSection3/HSection3";
import { HSection5 } from "./Section/HSection5/HSection5";
import HSection4 from "./Section/HSection4/HSection4";
import  HSection6  from "./Section/HSection6/HSection6";
import  HSection7  from "./Section/HSection7/HSection7";

export const Home =()=>{
    return (
        <div >
            <div className={styles.section1}>
                <Hsection1></Hsection1>
            </div>
            <div className={styles.home}>
                <HSection2></HSection2>
                <HSection3></HSection3>
                <HSection4></HSection4>
                <HSection5></HSection5>
                <HSection6></HSection6>
                <HSection7></HSection7>
            </div>
            
        </div>
    )
}