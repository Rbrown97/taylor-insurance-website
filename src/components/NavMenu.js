import React from 'react';
import { Link } from "react-router-dom";
import { Button, Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Logo5 from "../assets/TaylorInsurance.PNG"
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import LoginIcon from '@mui/icons-material/Login';
import './NavMenu.css';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function NavMenu(){

    return(
        <Box sx={{ flexGrow: 1 }}>
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ml: 35, mt: -5}}>{/**sx={{ml: 35}} original*/}
                    
                    <Link to="/">
                        <img src={Logo5}/>
                    </Link>
            
                    <Link to="/getQuote">
                        <Button variant="contained" startIcon={<RequestQuoteIcon />} sx={{backgroundColor: '#779685', mt: 10,'&:hover':{backgroundColor: '#BFD6CB'},}}>
                            Get Quote
                        </Button>
                    </Link>

                    <Link to="/signIn" className="signIn">
                        <Button variant="contained" startIcon={<LoginIcon />} sx={{backgroundColor: '#779685', mt: 10,'&:hover':{backgroundColor: '#BFD6CB'},}}>
                            Login
                        </Button>
                    </Link>

                    {/*This link should be temporary. Just for testing Profile page. Idealy, once logged in, the signIn link should be replaced with Profile*/}
                    {/*<Link to="/profile">
                        <Button variant="contained" startIcon={<AccountBoxIcon />} sx={{backgroundColor: '#779685', mt: 5,'&:hover':{backgroundColor: '#BFD6CB'},}}>
                            Profile
                        </Button>
                    </Link>*/}
                </Stack>
        </Box>
    );
}
