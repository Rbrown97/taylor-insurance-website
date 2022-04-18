import * as React from 'react';
import {useState, useEffect} from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useHistory } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from "axios";

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



export default function SignIn() {
  const [customers2, setCustomers2] = useState("")
  const history = useHistory();
  

  useEffect(() => {
    Axios.get("http://localhost:8080/v1/customers/").then(response => setCustomers2(response.data)).catch(error => console.log('error=======:', error));

  }, [])

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let userID = 0;
    const handleOnClick = () => history.push({pathname:"/profile", state: {userID, customers2} });
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    for (let x in customers2) {
      if(customers2[x].email == data.get('email') && customers2[x].password == data.get('password')){
        console.log("Login Successful",customers2[x].id)
        userID = customers2[x].id
        handleOnClick()
      }
    }

 


  };

  return (
    <ThemeProvider theme={theme}>
      <Fade in={true}>
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
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField 
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#678251','&:hover':{backgroundColor: '#BFD6CB'}, }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item sx={{ml: 2}}>
                  <Link to="/" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item sx={{ml: 25, mt: -3}}>
                  <Link to="/getQuote" variant="body2" >
                    {"Don't have an account? Get a quote"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </Fade>
    </ThemeProvider>
  );
}