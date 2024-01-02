import React from "react";

import { Navbar } from "../../component/Navbar/Navbar";
import style from "./Footer.module.css";

export const Footer =()=>{
    return(
        <div>
            <div>
                <Navbar footerFlag={true}/>
            </div>
            <div className={style.copyrightdetail}>
               <small>© 2020 Acme. All right reserved.</small>
               <small>Privacy Policy</small>
               <small>Terms of Service</small>
            </div>
        </div>
    )
}