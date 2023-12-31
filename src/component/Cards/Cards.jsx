import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ImgMediaCard({data}) {
    console.log(data)
    const  {image,alt,title,para,btn,fromClients} = data;
    const imgL = data.image;
    const imgl = Object.values(imgL);

  return (
    <Card sx={{ maxWidth: 359,
      bgcolor: '#1D1D1D',
      border:0.3,
      borderRadius:4,
      pl:2,
      borderColor:'#FFFFFF',
      color:'#FFFFFF',
      ":hover": {
        bgcolor: "#2E2E2E",
        color: "white"
      }}}>
       {fromClients?<CardMedia
        component="img"
        sx={{width:"105px",p:2,}}
        alt={`${data.alt}`}
        image={`${imgl}`}
      />: <CardMedia
        component="img"
        sx={{width:"60px",p:2,}}
        alt={`${data.alt}`}
        image={`${imgl}`}
      />} 
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        {fromClients? <Typography gutterBottom variant="small" component="div">
          {data.subtitle}
        </Typography>:null}
        <Typography variant="body2" color="#ffffff">
          {data.para}
        </Typography>
      </CardContent>
      <CardActions>
        {fromClients?null:
        <Button size="small" sx={{
          bgcolor: '#E3B748',
          color:'#000000',
          pl:2,
          pr:2,
          pt:1,
          pb:1,
          boxShadow: 1,
          borderRadius: 6,
          maxWidth: 121,
          ":hover": {
            bgcolor: "#E3B780",
            color: "#000000",
          },
          textTransform: 'none',
        }}
        >{data.btn}</Button>}
      </CardActions>
    </Card>
  );
}
