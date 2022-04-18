import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Fade from '@mui/material/Fade';
import VehicleQuoteIcon from '@mui/icons-material/DirectionsCar';
import HouseQuoteIcon from '@mui/icons-material/House';
import './getQuote.css';

function getQuote() {
  return (
    <div className="quotes">
      <Stack direction="row" spacing={50} justifyContent="center">
        <Link to="/homeQuote" className="HomeQuote">
          <Fade in={true}>
            <Button variant="contained" startIcon={<HouseQuoteIcon />} sx={{backgroundColor: '#678251', mt: 20,'&:hover':{backgroundColor: '#BFD6CB'},}}>
              Home Quote
            </Button>
          </Fade>
        </Link>
        <Link to="/VehicleQuote" className="VehicleQuote">
          <Fade in={true}>
            <Button variant="contained" startIcon={<VehicleQuoteIcon />} sx={{backgroundColor: '#678251', mt: 20,'&:hover':{backgroundColor: '#BFD6CB'},}}>
              Vehicle Quote
            </Button>
          </Fade>
        </Link>
      </Stack>
    </div>
    
  )
}

export default getQuote