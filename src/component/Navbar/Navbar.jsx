import React from "react";
import { Button } from "../Button/Button";
import styles from "./Navbar.module.css";
import { Navbuttons } from "../Navbuttons/Navbuttons";
import logo from "../../assests/logo.png";

export const Navbar =()=> {

    const nav_btns = ['Home','Attorneys', 'Practise Areas', 'About Us'];

    return(
        <div className={styles.nav_container}>
            <div><img src={logo} alt="IGSTUDIO"/></div>
            <div className={styles.nav_links}>
                <Navbuttons names={nav_btns}></Navbuttons>
            </div>
            <div><Button>Contact Now</Button></div>
        </div>

    )
}