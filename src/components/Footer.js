import React from 'react'
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className="Footer">
        <div className="socialMedia">
            <FacebookIcon /> <TwitterIcon /> <LinkedInIcon />
            <div className="contactInfo">
              <h3 className="contactInfoH3">Contact Info</h3>
              <p>Phone Number: 709-123-4567</p>
              <p>Email: quote@taylorinsurance.com</p>
            </div>
        </div>
        
        <p className="copyRight">&copy; 2022 TaylorsInsurance.com</p>
    </div>
  );
}

export default Footer