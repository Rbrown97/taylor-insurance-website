import { TextField, Grid, makeStyles, FormLabel, FormControl, FormControlLabel, Paper, Box, Button } from '@mui/material';
import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


const initialFormValues ={
    heatingType:'',
    locationType:'',
    homeValue:'',
    yearBuilt:'',
    homeStreetNumber:'',
    homeStreetName:'',
    homeAddressCity:'',
    homePostalCode:'',
    homePremium:0,
}



function HomeQuote() {

    const validate = () => {
        let temp = {}
        temp.heatingType = values.heatingType?"":""
        temp.locationType = values.locationType?"":""
        temp.homeValue = values.homeValue?"":"This field is required"
        temp.yearBuilt = values.yearBuilt?"":"This field is required"
        temp.homeStreetNumber = values.homeStreetNumber?"":"This field is required"
        temp.homeStreetName = values.homeStreetName?"":"This field is required"
        temp.homeAddressCity = values.homeAddressCity?"":"This field is required"
        temp.homePostalCode = values.homePostalCode.length?"":"This field is required"

        setErrors({
            ...temp
        })

        return Object.values(temp).every(x => x == "")
    }

    const generateHomeQuote = (event) => {
        event.preventDefault();
        let homePremium = 0.0;

        let basePremium = 500;
        let homeValueFactor = (0.2/100)*values.homeValue;
        let homeAgeFactor25 = 1.25;
        let homeAgeFactor50 = 1.5;
        let heatingFactorOil = 2;
        let heatingFactorWood = 1.25;
        let heatingFactorOther = 1;
        let locationFactorUrban = 1;
        let locationFactorRural = 1.15;

        homePremium += basePremium;
        homePremium += homeValueFactor;
        
        //Year built factor
        if(2022 - values.yearBuilt > 25){
            homePremium = homePremium * homeAgeFactor25
        } else if(2022 - values.yearBuilt > 50){
            homePremium = homePremium * homeAgeFactor50
        }

        //Heating Factor
        if(values.heatingType == "OIL_HEATING"){
            homePremium = homePremium * heatingFactorOil
        }else if(values.heatingType == "WOOD_HEATING"){
            homePremium = homePremium * heatingFactorWood
        }else if(values.heatingType == "OTHER_HEATING"){
            homePremium = homePremium * heatingFactorOther
        }

        //Location Factor
        if(values.locationType == "URBAN"){
            homePremium = homePremium * locationFactorUrban
        }else if (values.locationType == "RURAL"){
            homePremium = homePremium * locationFactorRural
        }

        //Tax
        homePremium = homePremium * 1.15

        //rounded
        homePremium = Math.round(homePremium)
        
        //assigning to values
        values.homePremium = homePremium

        console.log(homePremium)
        setShow(false)
        return homePremium
    }

    const handleSubmit = e => {
        //console.log("Logging!:")
        e.preventDefault();
        console.log(validate())
        
        if (validate())
            //window.alert("testing...")
            console.log("Submitted", values)
    }

    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({})

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const [show, setShow] = useState(true);

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
                {/*<h1>Home Form</h1>*/}
                
                { show?
                <form onSubmit={generateHomeQuote}>
                    <Typography variant="h2">Home Form</Typography>
                    <Grid container justifyContent="center" spacing={0}>
                        <Stack direction="row" spacing={5}>
                            <Stack direction="column" spacing={2}>
                            <FormControl>
                                <FormLabel>Heating Type</FormLabel>
                                <RadioGroup
                                    name="heatingType"
                                    value={values.heatingType}
                                    onChange={handleInputChange}
                                >
                                    <FormControlLabel value="OIL_HEATING" control={<Radio />} label="Oil Heating" />
                                    <FormControlLabel value="WOOD_HEATING" control={<Radio />} label="Wood Heating" />
                                    <FormControlLabel value="OTHER_HEATING" control={<Radio />} label="Other Heating" />
                                </RadioGroup>
                            </FormControl>
                            </Stack>
                            <Stack direction="column" spacing={2}>
                            <FormControl>
                                <FormLabel>House Location</FormLabel>
                                <RadioGroup
                                    name="locationType"
                                    value={values.locationType}
                                    onChange={handleInputChange}
                                >
                                    <FormControlLabel value="URBAN" control={<Radio />} label="Urban Location" />
                                    <FormControlLabel value="RURAL" control={<Radio />} label="Rural Location" />
                                </RadioGroup>
                            </FormControl>
                            </Stack>
                        </Stack>
    
                        
                        <Grid item xs={4}>
                            <Stack direction="column" spacing={1}>
                            <TextField
                                variant="outlined"
                                label="Home Value"
                                name="homeValue"
                                value={values.homeValue}
                                onChange={handleInputChange}
                                error={errors.homeValue}
                            />
                            <TextField
                                variant="outlined"
                                label="Year Built"
                                name="yearBuilt"
                                value={values.yearBuilt}
                                onChange={handleInputChange}
                                error={errors.yearBuilt}
                            />
                            <TextField
                                variant="outlined"
                                label="Home Street Number"
                                name="homeStreetNumber"
                                value={values.homeStreetNumber}
                                onChange={handleInputChange}
                                error={errors.homeStreetNumber}
                            />
                            <TextField
                                variant="outlined"
                                label="Home Street Name"
                                name="homeStreetName"
                                value={values.homeStreetName}
                                onChange={handleInputChange}
                                error={errors.homeStreetName}
                            />
                            <TextField
                                variant="outlined"
                                label="Home Address City"
                                name="homeAddressCity"
                                value={values.homeAddressCity}
                                onChange={handleInputChange}
                                error={errors.homeAddressCity}
                            />
                            <TextField
                                variant="outlined"
                                label="Home Postal Code"
                                name="homePostalCode"
                                value={values.homePostalCode}
                                onChange={handleInputChange}
                                error={errors.homePostalCode}
                            />
                            </Stack>
                        </Grid>
                    </Grid>
                        <Button variant="contained" type="submit" sx={{backgroundColor: '#779685', mt: 5,'&:hover':{backgroundColor: '#BFD6CB'},}}>
                            Submit
                        </Button>
                </form> :null}
                { !show?<Grid container justifyContent="center"  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={1} md={8}>
                    <Typography variant="h3">
                        Home Quote
                    </Typography>
                    <Typography variant="h4">
                        Premium: {"$"+values.homePremium}
                    </Typography>
                    <Typography variant="h4">
                        
                    </Typography>
                    <Typography variant="h5">
                        Quote is valid for a month
                    </Typography>
                    <Link to={{pathname:"/signUp", state: {values} }}>
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

export default HomeQuote