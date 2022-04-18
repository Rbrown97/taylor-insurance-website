import React from 'react'
import Stack from '@mui/material/Stack';
import "./Home.css"
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import { Button, Box, Paper, Chip, Fade, TextField} from '@mui/material';
import { styled } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import VehicleImg from '../assets/Vehicle.png';
import Grow from '@mui/material/Grow';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import PropertyImg from '../assets/Property.png';
import Slide from '@mui/material/Slide';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import LoginIcon from '@mui/icons-material/Login';
import Carousel from "react-elastic-carousel";


function Home() {
  return (
    <Box sx={{
      justifyContent: 'center',
      width: 1000,
      height: 500,
      pl: 100,
      flexGrow: 1
  }}>
    <Stack direction="column" spacing={5}>
    
      <Paper sx={{backgroundColor: '#E6EFEB'}}>
        <Stack divider={<Divider orientation="horizontal" flexItem />} >
          <Stack direction="column" justifyContent="center" sx={{pb: 5, pt: 2}}>
            <Typography variant="h4" >
              Save big with Taylor Insurance!
            </Typography>
            <Typography variant="subtitle1" >
              You could save up to $500 with competitive insurance rates
            </Typography>
          </Stack>

          <Stack direction="row" spacing={5}>
            <Link to="/homeQuote">
            <Button sx={{size:"small" }}>
              <img className="buttonImage" src={require('../assets/Property.png')} />
              <Typography>
                Looking for home insurance? Get a quote now!
              </Typography>
            </Button>
            </Link>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Link to="/vehicleQuote">
            <Button sx={{size:"small" }}>
            <Typography>
              Auto insurance available as well! Get a Quote!
            </Typography>
              <img className="buttonImage" src={require('../assets/Vehicle.png')} />
            </Button>
            </Link>
          </Stack>
        </Stack>
      </Paper>

      {/*Testimonials*/}
      <Paper sx={{p: 5, backgroundColor: '#E6EFEB'}}>
        <Stack direction="column" spacing={5}>
          <Typography variant="h4">
            See our testimonials!
          </Typography>
          <Stack direction="row" spacing={2} >
            <Paper elevation={10} variant="outlined" >
              <Typography sx={{p: 2}}>
                Insurance rates so good, my house burned down twice! - Rick
              </Typography>
            </Paper>
            <Paper elevation={10} variant="outlined"> 
              <Typography sx={{p: 2}}>
                I didnt know I wasnt allowed to drive a car uninsured. Thank you, Taylor Insurance! - Devin
              </Typography>
            </Paper>
            <Paper elevation={10} variant="outlined">
              <Typography sx={{p: 2}}>
                I've been saving an extra $13 a month after switching to Taylor Insurance!! - Niko
              </Typography>
            </Paper>
          </Stack>
        </Stack>
        </Paper>
        
      {/*Contact Us */}
      <Paper sx={{pt: 2, pb: 5, backgroundColor: '#E6EFEB'}} >
        <Stack direction="column">
          <Typography variant="h5">
            Have Questions? Contact Us:
          </Typography>

        <Stack direction="row" spacing={5} justifyContent="center">

          {/*Email Form */}
          <Stack direction="column"  spacing={2} sx={{pt: 2}}>
            <Paper elevation={10} sx={{p: 2}}>
            <Typography variant="h5">
              Email Form:
            </Typography>
            <Stack direction="row" >
              <TextField
                    variant="outlined"
                    label="Email"
                    name="email"
              />
              <TextField
                  variant="outlined"
                  label="Name"
                  name="name"
              />
            </Stack>
            <Stack direction="column">
              <TextField
                    variant="outlined"
                    label="Question:..."
                    name="question"
              />
            </Stack>
          </Paper>
          </Stack>

        {/*Contact Info */}
        <Stack direction="column" spacing={2} sx={{pt: 2}}>
          <Paper elevation={10} sx={{p: 4.5}}>
            <Typography variant="h5" >
              Contact Info: 
            </Typography>
          
          <Stack direction="row" justifyContent="center">
            <Typography>
              Telephone:&ensp; 738-8319<br/>
              Address: 13 Water Street, A1G5D3<br/>
              Email: inquiries@TaylorInsurance.ca
            </Typography>
          </Stack>
          </Paper>
        </Stack>
        </Stack>
        </Stack>
      </Paper>

    </Stack>
    </Box>
  );
}



export default Home