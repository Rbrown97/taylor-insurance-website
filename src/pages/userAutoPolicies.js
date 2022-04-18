import * as React from 'react';
import {Paper} from '@mui/material';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useLocation, useParams  } from "react-router-dom";
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




export default function UserPolicies() {
    const location = useLocation()
    const { customers, userID, customers2 } = location.state;
    const customerPolicy = customers[userID-1].autos[0].autoPolicy

    

    
    console.log("CustomerQuotes: ", customerPolicy)
    console.log(customers)

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
                    Here are your Auto Policies, {customers2[userID-1].firstName}
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
                Auto Policy 1
                </Typography>
                    <Typography variant="subtitle1">
                        Auto Policy Premium: ${customerPolicy.autoPolicyPremium}<br/>
                        Auto Policy Start Date: {customerPolicy.autoPolicyStartDate}<br/>
                        Auto Policy End Date: {customerPolicy.autoPolicyEndDate}
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