import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {Imagecard} from "../ImageCard/Imagecard";

export default function Imagecardlist({data}) {
    const imgL = data.sizel.img;
    const imgl = Object.values(imgL);
    const imgS = data.sizes.img;
    const imgs = Object.values(imgS);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="space-between" spacing={2} >
        <Grid xs={data.sizel.size}>
            <Imagecard title={data.sizel.title} img={imgl}/>
        </Grid>
        <Grid xs={data.sizes.size}>
            <Imagecard title={data.sizes.title} img={imgs}/>
        </Grid>
      </Grid>
    </Box>
  );
}
