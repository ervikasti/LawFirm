import React from "react";
import { Button } from "../Button/Button";
import styles from "./Navbar.module.css";
import { Navbuttons } from "../Navbuttons/Navbuttons";
import logo from "../../assests/logo.png";
import instagram from "../../assests/instagram.png";
import facebook from "../../assests/facebook.png";
import x from "../../assests/x.png";
import pintrest from "../../assests/pintrest.png";

export const Navbar =({footerFlag})=> {
    

    const nav_btns = ['Home','Attorneys', 'Practise Areas', 'About Us'];

    return(
        <div className={styles.nav_container}>
            <div><img src={logo} alt="IGSTUDIO"/></div>
            <div className={styles.nav_links}>
                <Navbuttons data={nav_btns}></Navbuttons>
            </div>
            {!footerFlag?<div><Button>Contact Now</Button></div>
            :<div>
                <img className={styles.footer_socialmedia}src={instagram} alt='instagram'/>
                <img className={styles.footer_socialmedia} src={facebook} alt='facebook'/>
                <img className={styles.footer_socialmedia} src={x} alt='x'/>
                <img className={styles.footer_socialmedia} src={pintrest} alt='pintrest'/>
            </div>
            }
            
        </div>

    )
}