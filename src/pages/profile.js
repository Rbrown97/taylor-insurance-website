import * as React from 'react';
import {useState, useEffect} from "react";
import {Paper} from '@mui/material';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useLocation, useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import VehicleQuoteIcon from '@mui/icons-material/DirectionsCar';
import HouseQuoteIcon from '@mui/icons-material/House';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from "axios";
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ReceiptIcon from '@mui/icons-material/Receipt';




export default function Profile() {
  const [customers, setCustomers] = useState("")
  const location = useLocation()
  const { userID, customers2 } = location.state;
  console.log(userID)
  
  

  useEffect(() => {
    Axios.get("http://localhost:8080/v1/customers/").then(response => setCustomers(response.data)).catch(error => console.log('error=======:', error));

  }, [])
  
  const FetchRequest = (e) =>{
    //console.log(customers.slice(-1)[0].homes.slice(-1)[0].homeId)
    console.log(customers)
    console.log(customers[userID-1].firstName)
    console.log(customers[userID-1].autos[0])
    console.log(customers[1])
    console.log("Customers Slice", customers.slice(-1)[0])
    //console.log(customers.slice(-1)[0].homes.slice(-1)[0].homeQuotes.slice(-1)[0].homeQuotePremium)
  }


  return (
    <Box justifyContent="center" sx={{
      justifyContent: 'center',
      width: 1000,
      height: 500,
      pl: 100,
      alignItems: 'center',
      flexGrow: 1,
  }}>
      <Paper elevation={10}  sx={{
                    justifyContent: 'center',
                    backgroundColor: '#E6EFEB',
                    pb: 5,
                }}>
      <Stack divider={<Divider orientation="horizontal" flexItem />} direction="column" spacing={10}>
        <Stack>
        <Stack direction="row" justifyContent="center" >
          <Typography variant="h4">
            Welcome, {customers2[userID-1].firstName}!
          </Typography>
        </Stack>
        <Stack direction="row" spacing={25} sx={{pl: 10}}>
          <Stack direction="column" spacing={5} justifyContent="center">
            <Typography variant="h5" >
              View Quotes
            </Typography>
            <Link to={{pathname:"/userQuotes", state: {customers, userID, customers2} }}>
              <Fade in={true}>
                <Button variant="contained" startIcon={<ReceiptIcon />} sx={{backgroundColor: '#678251','&:hover':{backgroundColor: '#BFD6CB'},}}>
                  Home Quotes
                </Button>
              </Fade>
            </Link>
            <Link to={{pathname:"/userAutoQuotes", state: {customers, userID, customers2} }}>
              <Fade in={true}>
                <Button variant="contained" startIcon={<ReceiptIcon />} sx={{backgroundColor: '#678251','&:hover':{backgroundColor: '#BFD6CB'},}}>
                  Auto Quotes
                </Button>
              </Fade>
            </Link>
          </Stack>

          <Stack sx={{pt: 9}}>
            <Link to={{pathname:"/profile", state: {customers, userID, customers2} }}>
              <Fade in={true}>
                <Button variant="contained" startIcon={<AccountBoxIcon />} sx={{backgroundColor: '#678251','&:hover':{backgroundColor: '#BFD6CB'},}}>
                  User Info
                </Button>
              </Fade>
            </Link>
          </Stack>
            
          <Stack direction="column" spacing={5} justifyContent="center" >
            <Typography variant="h5">
              View Policies
            </Typography>
            <Link to={{pathname:"/userPolicies", state: {customers, userID, customers2} }}>
              <Fade in={true}>
                <Button variant="contained" startIcon={<HistoryEduIcon />} sx={{backgroundColor: '#678251','&:hover':{backgroundColor: '#BFD6CB'},}}>
                  Home Policies
                </Button>
              </Fade>
            </Link>
            <Link to={{pathname:"/userAutoPolicies", state: {customers, userID, customers2} }}>
              <Fade in={true}>
                <Button variant="contained" startIcon={<HistoryEduIcon />} sx={{backgroundColor: '#678251','&:hover':{backgroundColor: '#BFD6CB'},}}>
                  Auto Policies
                </Button>
              </Fade>
            </Link>
          </Stack>
        </Stack>
        </Stack>
          

          {/*<Fade in={true}>
            <Button variant="contained" onClick={FetchRequest} sx={{backgroundColor: '#678251', mt: 20,'&:hover':{backgroundColor: '#BFD6CB'},}}>
              get Customers (TEST)
            </Button>
              </Fade>*/}



        <Stack direction="column" spacing={5} >
          <Stack sx={{mt: -5}}>
            <Typography variant="h4">
              Looking for a new quote?
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="center" spacing={5} sx={{pb: 7, pt: 5}}>
            <Link to={{pathname:"/homeQuote", state: {customers, userID, customers2} }}>
              <Fade in={true}>
                <Button variant="contained" startIcon={<RequestQuoteIcon />} sx={{backgroundColor: '#678251','&:hover':{backgroundColor: '#BFD6CB'},}}>
                  Home Quote
                </Button>
              </Fade>
            </Link>
            <Link to={{pathname:"/currentCustomerVehicleQuote", state: {customers, userID, customers2} }}>
              <Fade in={true}>
                <Button variant="contained" startIcon={<RequestQuoteIcon />} sx={{backgroundColor: '#678251','&:hover':{backgroundColor: '#BFD6CB'},}}>
                  Auto Quote
                </Button>
              </Fade>
            </Link>
          </Stack>
        </Stack>
      </Stack>
      </Paper>
    </Box>
  );
}