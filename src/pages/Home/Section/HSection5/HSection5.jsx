import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { Ourteamcard } from "../../../../component/OurteamCard/Ourteamcard";
import photo from "../../../../assests/Danial.png";
import sanfole from "../../../../assests/Sanfole.png";
import cesforila from "../../../../assests/Cesforila.png";
import colleen from "../../../../assests/colleen.png";
import haldone from "../../../../assests/haldone.png";
import nikejoe from "../../../../assests/nikejoe.png";
import { Customheader } from "../../../../component/CustomHeader/Customheader";
import styles from "./HSection5.module.css";
export const HSection5 = ()=> {
    const dataList = [{
        img:{photo},
        name:'Danial Def',
        desc: '301 Cases',
    },
    {
        img:{sanfole},
        name:'Sanfole',
        desc: '850 Cases',
    },
    {
        img:{cesforila},
        name:'Cesforila',
        desc: '470 Cases',
    },
    {
        img:{colleen},
        name:'Colleen',
        desc: '180 Cases',
    },
    {
        img:{haldone},
        name:'Haldone',
        desc: '212 Cases',
    },
    {
        img:{nikejoe},
        name:'Nike Joe',
        desc: '350 Cases',
    },]

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Customheader data="Our Team"/>
            </div>
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container justifyContent="space-between" spacing={2} >
                        {dataList.map( (item,i) => (
                        <Grid xs={4} key={i} >
                            <Ourteamcard  data={item}/>
                        </Grid>   
                        ))}
                            
                    </Grid>
                </Box>
            </div>
        </div>
    )
}