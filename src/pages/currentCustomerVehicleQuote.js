import { TextField, Grid, makeStyles, FormLabel, FormControl, FormControlLabel, Paper, Box, Button } from '@mui/material';
import { Link, useLocation, useParams  } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


const initialFormValues ={
    client:'',
    carMake:'',
    carModel:'',
    carYear:'',
    numberOfAccidents:'',
    vehiclePremium:0,
}


function CurrentCustomerVehicleQuote() {
    const [values, setValues] = useState(initialFormValues);
    const location = useLocation()
    const { customers, userID, customers2 } = location.state;
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
    let customerURL = ""
    let autoURL = ""
    let autoQuoteURL = ""
    let autoPolicyURL = ""





    const CreatePolicy = (event) => {
    console.log(customers.length, "Customer Length")
    
    console.log(customerURL)
    console.log(autoURL)
    console.log(autoQuoteURL)
    console.log(autoPolicyURL)

    if(customers.length == 0){
        //customerURL = "http://localhost:8080/v1/customers?firstName=" + postData.firstName + "&lastName=" + postData.lastName + "&email=" + postData.email + "&dateOfBirth=" + postData.dateOfBirth + "&password=" + postData.password
        autoURL = "http://localhost:8080/v1/customers/" + (customers.length+1) + "/homes?streetNumber=" + values.homeStreetNumber + "&streetName=" + values.homeStreetName + "&city=" + values.homeAddressCity + "&postalcode=" + values.homePostalCode + "&value=" + values.homeValue + "&dateBuilt=" + values.yearBuilt + "&heatingType=" + values.heatingType + "&location=" + values.locationType
        autoQuoteURL = "http://localhost:8080/v1/homes/" + 1 + "/homequotes?homeQuotePremium=" + values.homePremium + "&homeQuoteStartDate=" + todaysDate + "&homeQuoteEndDate=" + laterMonthDate
        autoPolicyURL = "http://localhost:8080/v1/homes/" + 1 + "/homepolicies?homePolicyPremium=" + values.homePremium + "&homePolicyStartDate=" + todaysDate + "&homePolicyEndDate=" + laterYearDate

    }else{
        //customerURL = "http://localhost:8080/v1/customers?firstName=" + postData.firstName + "&lastName=" + postData.lastName + "&email=" + postData.email + "&dateOfBirth=" + postData.dateOfBirth + "&password=" + postData.password
        autoURL = "http://localhost:8080/v1/customers/" + (customers.length+1) + "/autos?make=" + values.carMake + "&model=" + values.carModel + "&dateMade=" + values.carYear
        autoQuoteURL = "http://localhost:8080/v1/autos/" + 1 + "/autoquotes?autoQuotePremium=" + values.vehiclePremium + "&autoQuoteStartDate=" + todaysDate + "&autoQuoteEndDate=" + laterMonthDate
        autoPolicyURL = "http://localhost:8080/v1/autos/" + 1 + "/autopolicies?autoPolicyPremium=" + values.vehiclePremium + "&autoPolicyStartDate=" + todaysDate + "&autoPolicyEndDate=" + laterYearDate
    }

    async function fetchPOSTPolicy(autoPolicyURL){
        await fetch(autoPolicyURL,{
            method: 'POST'
        }).then(()=> {console.log("Auto Added")}).catch(error => console.log('error============:', error));
    }
    
    fetchPOSTPolicy(autoPolicyURL)
    
    

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


    const generateVehicleQuote = (event) => {
        event.preventDefault();
        let vehiclePremium = 0.0;

        let basePremium = 750;
        let driverAgeFactor25 = 2;
        let carAccidents2 = 2.5;
        let carAccidents1 = 1.25;
        let carAge10 = 2;
        let carAge5 = 1.5;

        vehiclePremium += basePremium

        if(2022 - values.client < 25){
            vehiclePremium = vehiclePremium * driverAgeFactor25
        }else{
            vehiclePremium = vehiclePremium * 1.25
        }

        if(values.numberOfAccidents > 2){
            vehiclePremium = vehiclePremium * carAccidents2
        }else if(values.numberOfAccidents == 1){
            vehiclePremium = vehiclePremium * carAccidents1
        }else{
            vehiclePremium = vehiclePremium * 1
        }

        if(2022 - values.carYear > 10){
            vehiclePremium = vehiclePremium * carAge10
        }else if(2022 - values.carYear > 5){
            vehiclePremium = vehiclePremium * carAge5
        }else{
            vehiclePremium = vehiclePremium * 1
        }

        //Tax
        vehiclePremium = vehiclePremium * 1.15

        //rounded
        vehiclePremium = Math.round(vehiclePremium)
        
        //assigning to values
        values.vehiclePremium = vehiclePremium


        if(customers.length == 0){
            //customerURL = "http://localhost:8080/v1/customers?firstName=" + postData.firstName + "&lastName=" + postData.lastName + "&email=" + postData.email + "&dateOfBirth=" + postData.dateOfBirth + "&password=" + postData.password
            autoURL = "http://localhost:8080/v1/customers/" + (customers.length+1) + "/homes?streetNumber=" + values.homeStreetNumber + "&streetName=" + values.homeStreetName + "&city=" + values.homeAddressCity + "&postalcode=" + values.homePostalCode + "&value=" + values.homeValue + "&dateBuilt=" + values.yearBuilt + "&heatingType=" + values.heatingType + "&location=" + values.locationType
            autoQuoteURL = "http://localhost:8080/v1/homes/" + 1 + "/homequotes?homeQuotePremium=" + values.homePremium + "&homeQuoteStartDate=" + todaysDate + "&homeQuoteEndDate=" + laterMonthDate
            autoPolicyURL = "http://localhost:8080/v1/homes/" + 1 + "/homepolicies?homePolicyPremium=" + values.homePremium + "&homePolicyStartDate=" + todaysDate + "&homePolicyEndDate=" + laterYearDate
    
        }else{
            //customerURL = "http://localhost:8080/v1/customers?firstName=" + postData.firstName + "&lastName=" + postData.lastName + "&email=" + postData.email + "&dateOfBirth=" + postData.dateOfBirth + "&password=" + postData.password
            autoURL = "http://localhost:8080/v1/customers/" + userID + "/autos?make=" + values.carMake + "&model=" + values.carModel + "&dateMade=" + values.carYear
            autoQuoteURL = "http://localhost:8080/v1/autos/" + 1 + "/autoquotes?autoQuotePremium=" + values.vehiclePremium + "&autoQuoteStartDate=" + todaysDate + "&autoQuoteEndDate=" + laterMonthDate
            autoPolicyURL = "http://localhost:8080/v1/autos/" + 1 + "/autopolicies?autoPolicyPremium=" + values.vehiclePremium + "&autoPolicyStartDate=" + todaysDate + "&autoPolicyEndDate=" + laterYearDate
        }   

        console.log("autoURL: ",autoURL)
        console.log("autoQuoteURL: ",autoQuoteURL)

        async function fetchPOST(autoURL, autoQuoteURL){
            await fetch(autoURL,{
                method: 'POST'
            }).then(()=> {console.log("Auto Added")}).catch(error => console.log('error============:', error));
    
            await fetch(autoQuoteURL,{
                method: 'POST'
            }).then(()=> {console.log("Quote Added")}).catch(error => console.log('error============:', error));
        }
        
        fetchPOST(autoURL, autoQuoteURL)



        setShow(false)
        return vehiclePremium
    }
    const [show, setShow] = useState(true);

    const handleInputChange= e=>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    return (
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
                { show?
                <form onSubmit={generateVehicleQuote}> 
                <Typography variant="h2" sx={{pt: 2, pb: 5}}>Auto Form</Typography>
                    <Grid container justifyContent="center" spacing={1}>
                        <Stack direction="column" spacing={1}>
                            <TextField
                                variant="outlined"
                                label="Client DOB"
                                name="client"
                                value={values.client}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Car Make"
                                name="carMake"
                                value={values.carMake}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Car Model"
                                name="carModel"
                                value={values.carModel}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Car Year"
                                name="carYear"
                                value={values.carYear}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Number of Accidents"
                                name="numberOfAccidents"
                                value={values.numberOfAccidents}
                                onChange={handleInputChange}
                            />
                        </Stack>
                    </Grid>
                    <Grid direction="row" container justifyContent="center" spacing={5}>
                    <Grid item xs={0}>
                    

                        
                        <Button variant="contained" type="submit" sx={{backgroundColor: '#779685', mt: 5,'&:hover':{backgroundColor: '#BFD6CB'},}}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
                </form> :null}
                { !show?<Grid container justifyContent="center"  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={1} md={8}>
                    <Typography variant="h3">
                        Vehicle Quote
                    </Typography>
                    <Typography variant="h4">
                        Premium: {"$"+values.vehiclePremium}
                    </Typography>
                    <Typography variant="h4">
                        
                    </Typography>
                    <Typography variant="h5">
                        Quote is valid for a month
                    </Typography>
                    <Link to={{pathname:"/profile", state: {userID, customers2} }}>
                    <Button onClick={CreatePolicy} variant="contained" sx={{backgroundColor: '#779685', mt: 5,'&:hover':{backgroundColor: '#BFD6CB'},}}>
                        Get Policy
                    </Button>
                    </Link>
                    </Grid>
                    </Grid>
                     :null}
                     <Grid direction="row" container justifyContent="center" spacing={5}>
                    <Grid item xs={0}>
                        <Link to={{pathname:"/profile", state: {userID, customers2} }}>
                            <Button variant="contained"  sx={{backgroundColor: '#779685', mt: 5,'&:hover':{backgroundColor: '#BFD6CB'},}}>
                                Back
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
        
    )
}

export default CurrentCustomerVehicleQuote