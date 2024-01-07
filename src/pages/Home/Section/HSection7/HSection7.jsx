import React from 'react';
import styles from './HSection7.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Customheader } from '../../../../component/CustomHeader/Customheader';
export default ()=>{

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("btn clicked");
    }

    return(

        <div className={styles.contain}>
            <div className={styles.container}>
            <div>
                <Customheader data={"Subscribe Our Newsletter"}/>
            </div>
            <div >
                <form className={styles.form} onSubmit={handleSubmit}>
                  
                    <input className={styles.name} type="text" id="name" name="name" placeholder='Name:' />
               
                    <input type="email" id="email" name="email" placeholder='Enter your Email:'/>

                    <button className={styles.submitBtn} type="submit">SEND</button>
                </form>
            </div>
        </div>
        </div>
    )
}