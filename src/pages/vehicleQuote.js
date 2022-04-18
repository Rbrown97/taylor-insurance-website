import { TextField, Grid, makeStyles, FormLabel, FormControl, FormControlLabel, Paper, Box, Button } from '@mui/material';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
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


function VehicleQuote() {
    const [values, setValues] = useState(initialFormValues);

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
                <Typography variant="h2">VehicleForm</Typography>
                    <Grid container justifyContent="center" spacing={0}>
                        <Grid item xs={4}>
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
                        </Grid>
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
                    <Link to={{pathname:"/signUpVehicle", state: {values} }}>
                    <Button variant="contained" sx={{backgroundColor: '#779685', mt: 5,'&:hover':{backgroundColor: '#BFD6CB'},}}>
                        Sign up and Get Policy
                    </Button>
                    </Link>
                    </Grid>
                    </Grid>
                     :null}
                     <Grid direction="row" container justifyContent="center" spacing={5}>
                    <Grid item xs={0}>
                        <Link to="/">
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

export default VehicleQuote