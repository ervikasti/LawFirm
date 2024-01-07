import { Customheader } from "../../../../component/CustomHeader/Customheader";
import FaqAccordion from "../../../../component/FAQAccordion/FaqAccordion";
import styles from "./HSection6.module.css";
import * as React from "react";

export default function HSection6 () {
    const faqList = [{
        id:`panel1`,
        question:`Do I need a personal injury report ?`,
        ans:`Amet minim mollit non deserunt ullamco est sit
        aliqua dolor do amet sint. Velit officia consequatduis
        enim velit mollit Exer. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.`,
    },
    {
        id:`panel2`,
        question:`How much is my case worth ?`,
        ans:`Amet minim mollit non deserunt ullamco est sit
        aliqua dolor do amet sint. Velit officia consequatduis
        enim velit mollit Exer. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.`,
    },
    {
        id:`panel3`,
        question:`What should I  do right after car acccident ?`,
        ans:`Amet minim mollit non deserunt ullamco est sit
        aliqua dolor do amet sint. Velit officia consequatduis
        enim velit mollit Exer. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.`,
    },
    ]

    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
      };

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Customheader data={"FAQ"}></Customheader>
            </div>
            <div className={styles.details}>
                <div className={styles.details_para}>Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. </div>
                <div className={styles.details_accordian}>
                    {faqList.map( (data)=>(
                        <FaqAccordion key={data.id} data={data} expanded={expanded} onClick={handleChange} ></FaqAccordion>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}