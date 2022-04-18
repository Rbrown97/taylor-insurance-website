import * as React from 'react';
import {Paper} from '@mui/material';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useLocation, useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import VehicleQuoteIcon from '@mui/icons-material/DirectionsCar';
import HouseQuoteIcon from '@mui/icons-material/House';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Axios from "axios"




export default function UserQuotes() {
  //const [customers, setCustomers] = useState("")
  const location = useLocation()
  const { customers, userID, customers2 } = location.state;

  console.log(customers)
  console.log("User ID: ", userID)
  const [show, setShow] = useState(true);

  
  
  //console.log(customers.slice(-1)[0].homes.slice(-1)[0].homeQuotes.slice(-1)[0])
  const customerQuotes = customers[userID-1].autos[0].autoQuotes[0]
  /*for (let x in customers) {
    if(customers[x].id == userID){
      customerQuotes = customers[x].homes[userID-1].homeQuotes[userID-1]
    }
  }*/
  console.log("CustomerQuotes: ", customerQuotes)
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>  <li>{number}</li>);
  //const customerItems = customerQuotes.map((quote) => <li>{quote}</li>);
  

  return (
    <Fade in={true}>
     <Box sx={{
            justifyContent: 'center',
            width: 1000,
            height: 500,
            pl: 100,
            flexGrow: 1
        }}>
         <Paper elevation={10}  sx={{
                justifyContent: 'center',
                backgroundColor: '#E6EFEB',
                pb: 5,
            }}>
        
            <Typography variant="h4">
                Here are your Quotes, {customers2[userID-1].firstName}
            </Typography>
            <Stack direction="row" spacing={50} justifyContent="center">
              <Paper elevation={10} sx={{
                justifyContent: 'center',
                backgroundColor: '#E6EFEB',
                pb: 5,
                pl: 5,
                pr: 5,
                mt: 5
            }}>
              <Typography variant="h6">
                Auto Quote 1
              </Typography>
                <Typography variant="subtitle1">
                  Quote Premium: ${customerQuotes.homeQuotePremium}<br/>
                  Quote Start Date: {customerQuotes.homeQuoteStartDate}<br/>
                  Quote End Date: {customerQuotes.homeQuoteEndDate}
                </Typography>
              </Paper>
            </Stack>
            <Link to={{pathname:"/profile", state: {userID, customers2} }}>
                <Button variant="contained" startIcon={<AccountBoxIcon />} sx={{backgroundColor: '#678251', mt: 20,'&:hover':{backgroundColor: '#BFD6CB'},}}>
                Back to profile
                </Button>
            </Link>
        </Paper>
     </Box>
    </Fade>
  );
}