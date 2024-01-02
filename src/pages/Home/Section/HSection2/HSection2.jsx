
import React from "react";
import Cards from "../../../../component/Cards/Cards";
import successCard from "../../../../assests/successCard.png";
import styles from "./HSection2.module.css";
import { Customheader } from "../../../../component/CustomHeader/Customheader";
import { SubHeading } from "../../../../component/Subheading/SubHeading";

export const HSection2 =()=>{
    const card1={image:{successCard}, alt:"gift", title:"98% Success Rate", para:`Amet minim mollit non deserunt ullamco est
    sit aliqua dolor do amet sint. Velit officia
    consequatduis enim velit mollit Exer`, btn:"Read More"};

    const card2={image:{successCard}, alt:"gift", title:"100% Success Rate", para:`Amet minim mollit non deserunt ullamco est
    sit aliqua dolor do amet sint. Velit officia
    consequatduis enim velit mollit Exer`, btn:"Read More"};

    return(
        <div className={styles.container}>
            <div className={styles.headers}>
                <Customheader data={`Let’s Introduce Ourself`}/>
                <div className={styles.cards_details_header}>
                    <h3>Criminal Lawyer</h3>
                    <SubHeading>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exercitation.</SubHeading>
                </div>
            </div>
            <div className={styles.cards_details}>
                <div className={styles.cards_details_header}>
                    <Customheader data={"Why Choose us?"}/>
                </div>
                <div className={styles.cards_container}>
                    <Cards data={card1}/>
                    <Cards data={card2}/>
                    <Cards data={card2}/>
                </div>
               
            </div>
        </div>
    );
}