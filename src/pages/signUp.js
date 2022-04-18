import * as React from 'react';
import {useState, useEffect} from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useLocation, useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link to="https://mui.com/" color="inherit" href="https://mui.com/">
        TaylorInsurance
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export default function SignUp() {
    useEffect(() => {
        Axios.get("http://localhost:8080/v1/customers/").then(response => setCustomers(response.data)).catch(error => console.log('error=======:', error));
    
      },[])
    const { handle } = useParams()
    const location = useLocation()
    const { values } = location.state;
    console.log(values.homePremium)
    let todaysDate = new Date();
    let laterYearDate = new Date(todaysDate.getFullYear()+1, todaysDate.getMonth()+1, todaysDate.getDate())
    let laterMonthDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth()+2, todaysDate.getDate())
    laterMonthDate = laterYearDate.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
    laterYearDate = laterYearDate.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
    todaysDate = todaysDate.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

    const [customers, setCustomers] = useState("")
    
    
    

    const HandleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const postData = {firstName: data.get('firstName'),
                        lastName: data.get('lastName'),
                        email: data.get('email'),
                        dateOfBirth: '2002-10-27',
                        password: data.get('password')
                        }
        

        console.log(customers.length, "Customer Length")
        
        let customerURL = ""
        let homeURL = ""
        let homeQuoteURL = ""
        let homePolicyURL = ""

        if(customers.length == 0){
            customerURL = "http://localhost:8080/v1/customers?firstName=" + postData.firstName + "&lastName=" + postData.lastName + "&email=" + postData.email + "&dateOfBirth=" + postData.dateOfBirth + "&password=" + postData.password
            homeURL = "http://localhost:8080/v1/customers/" + (customers.length+1) + "/homes?streetNumber=" + values.homeStreetNumber + "&streetName=" + values.homeStreetName + "&city=" + values.homeAddressCity + "&postalcode=" + values.homePostalCode + "&value=" + values.homeValue + "&dateBuilt=" + values.yearBuilt + "&heatingType=" + values.heatingType + "&location=" + values.locationType
            homeQuoteURL = "http://localhost:8080/v1/homes/" + 1 + "/homequotes?homeQuotePremium=" + values.homePremium + "&homeQuoteStartDate=" + todaysDate + "&homeQuoteEndDate=" + laterMonthDate
            homePolicyURL = "http://localhost:8080/v1/homes/" + 1 + "/homepolicies?homePolicyPremium=" + values.homePremium + "&homePolicyStartDate=" + todaysDate + "&homePolicyEndDate=" + laterYearDate

        }else{
            customerURL = "http://localhost:8080/v1/customers?firstName=" + postData.firstName + "&lastName=" + postData.lastName + "&email=" + postData.email + "&dateOfBirth=" + postData.dateOfBirth + "&password=" + postData.password
            homeURL = "http://localhost:8080/v1/customers/" + (customers.length+1) + "/homes?streetNumber=" + values.homeStreetNumber + "&streetName=" + values.homeStreetName + "&city=" + values.homeAddressCity + "&postalcode=" + values.homePostalCode + "&value=" + values.homeValue + "&dateBuilt=" + values.yearBuilt + "&heatingType=" + values.heatingType + "&location=" + values.locationType
            homeQuoteURL = "http://localhost:8080/v1/homes/" + (customers.length+1) + "/homequotes?homeQuotePremium=" + values.homePremium + "&homeQuoteStartDate=" + todaysDate + "&homeQuoteEndDate=" + laterMonthDate
            homePolicyURL = "http://localhost:8080/v1/homes/" + (customers.length+1) + "/homepolicies?homePolicyPremium=" + values.homePremium + "&homePolicyStartDate=" + todaysDate + "&homePolicyEndDate=" + laterYearDate
        }
        
        

        console.log(customerURL)
        console.log(homeURL)
        console.log(homeQuoteURL)
        console.log(homePolicyURL)
        
        async function fetchPOST(customerURL, homeURL, homeQuoteURL, homePolicyURL){
            await fetch(customerURL,{
                method: 'POST'
            }).then(()=> {console.log("Customer Added")}).catch(error => console.log('error============:', error));
    
            await fetch(homeURL,{
                method: 'POST'
            }).then(()=> {console.log("Home Added")}).catch(error => console.log('error============:', error));
    
            await fetch(homeQuoteURL,{
                method: 'POST'
            }).then(()=> {console.log("Quote Added")}).catch(error => console.log('error============:', error));
    
    
            await fetch(homePolicyURL,{
                method: 'POST'
            }).then(()=> {console.log("Policy Added")}).catch(error => console.log('error============:', error));
        }
        
        fetchPOST(customerURL, homeURL, homeQuoteURL, homePolicyURL)

        /*fetch('http://localhost:8080/v1/customers', {
            method: 'POST',
            body: '?firstName=' + postData.firstName + '&lastName=' + postData.lastName + '&email=' + postData.email + '&dateOfBirth=' + postData.dateOfBirth
        }).then(()=> {console.log("Customer Added")}).catch(error => console.log('error============:', error));*/
        
        //Axios.post('http://localhost:8080/v1/customers', postData).then(res => console.log(res.data))
        /*console.log({
        email: data.get('email'),
        password: data.get('password'),
        });*/
    };

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: '#678251' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={HandleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                </Grid>
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#678251','&:hover':{backgroundColor: '#BFD6CB'}, }}
                >
                Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                <Grid item sx={{mr: 8.5}}>
                    <Link to="/signIn" href="#" variant="body2">
                    Already have an account? Sign in
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
        </Container>
        </ThemeProvider>
  );
}