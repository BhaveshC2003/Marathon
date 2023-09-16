import React, { useState } from "react";
import Header from "../Header/Header";
import './Events.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'


const Events = () => {

const [name, setName] = useState('');

  return (
    <>
      <div className="App">
        <Header />
      </div>

      <div style={{marginLeft:"2rem", marginTop:"2rem"}}>
    <Link to='/events/createEvent'>
    <button className='button' style={{fontSize:"1.5rem", padding:"0.5rem 1rem 0.5rem 1rem", borderRadius:"1.5rem"}}>
      Create an Event
    </button>
    </Link>
    </div>

    <div style={{padding:"0rem 20% 2rem 20%"}}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=""
        title="Hackathon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Hackathon
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
</div>

    </>
  );
};

export default Events;
