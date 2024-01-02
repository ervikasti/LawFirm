
import React from "react";
import Imagecardlist from "../../../../component/ImageCardList/Imagecardlist";
import businesslaw from "../../../../assests/Business_Law.png";
import businesslaw2 from "../../../../assests/Business_Law_2.png";
import partnershiplaw from "../../../../assests/Partnership_Law.png";
import landlordlaw from "../../../../assests/Landlord_disputes.png";
import elderabuselaw from "../../../../assests/Elder_Abuse.png";
import realestatelaw from "../../../../assests/Realestate_Law.png";
import styles from "./HSection3.module.css";
import { Customheader } from "../../../../component/CustomHeader/Customheader";

export const HSection3 =()=>{
    const itemData =[
        {   sizel:{
                size:8,  
                img:{businesslaw},
                title: "BUSINESS LAW",
            },
            sizes:{
                size:4,
                img:{partnershiplaw},
                title: "PARTNERSHIP LAW",
            },
        },
        
        {
            sizel:{
                size:4,
                img:{realestatelaw},
                title: "REAL ESTATE LAW",
            },
            sizes: {
                size:8,
                img:{businesslaw2},
                title: "BUSINESS LAW",
            },
        },
       
        {
            sizel:{
                size:8,
                img:{landlordlaw},
                title: "LANDLOARD DISPUTES",
            },
            sizes:{
                size:4,
                img:{elderabuselaw},
                title: "ELDER ABUSE",
            }
        },       
    ]

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Customheader data={"Area of Practices"}/>
            </div>
            <div>
                {itemData.map((item,i) => (
                    <Imagecardlist key={i} data={item}/>
                ))}
                
            </div>
        </div>
    );
}