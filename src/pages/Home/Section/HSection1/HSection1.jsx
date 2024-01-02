import React from "react";
import styles from "./HSection1.module.css";
import section1 from "../../../../assests/section1.png"
import { SubHeading } from "../../../../component/Subheading/SubHeading";

export const Hsection1 =()=>{

    let section1text = "Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.";
    return (
        <div className={styles.Hsection1}>
            <div className={styles.Hsection1_details}>
                <h3 className={styles.Hsection1_header1}>You don’t have to</h3>
                <h3 className={styles.Hsection1_header2}>Fight them Alone.</h3>
                <SubHeading>{section1text}</SubHeading>
                <input type="email" placeholder="enter your email"></input>
            </div>
            <div>
                <img src={section1} alt="img" />
            </div>
        </div>
    )
}