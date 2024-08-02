import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <div className="footer-bg py-10 text-gray-700 bg-cover bg-center" style={{backgroundImage:"url(/back.png)"}}>
      <Container>

            <img src="log.png" alt="Supreme Group Logo" className="mb-4" />
      </Container>
      <Container >
            <Grid container spacing={4} className='w-full'>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="font-bold mb-4">APPLICATIONS</Typography>
            <div className="space-y-2">
              <Typography><Link href="#" color="inherit" underline="none">Apparel</Link></Typography>
              <Typography><Link href="#" color="inherit" underline="none">Automotive</Link></Typography>
              <Typography><Link href="#" color="inherit" underline="none">Filtration</Link></Typography>
              <Typography><Link href="#" color="inherit" underline="none">Customised Solutions</Link></Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="font-bold mb-4">COMPANY</Typography>
            <div className="space-y-2">
              <Typography><Link href="#" color="inherit" underline="none">Innovation</Link></Typography>
              <Typography><Link href="#" color="inherit" underline="none">Global Competency</Link></Typography>
              <Typography><Link href="#" color="inherit" underline="none">About Us</Link></Typography>
              <Typography><Link href="#" color="inherit" underline="none">Contact Us</Link></Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="font-bold mb-4">MORE</Typography>
            <div className="space-y-2">
              <Typography><Link href="#" color="inherit" underline="none">Careers</Link></Typography>
              <Typography><Link href="#" color="inherit" underline="none">Privacy Policy</Link></Typography>
              <Typography><Link href="#" color="inherit" underline="none">Terms and Conditions</Link></Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="font-bold mb-4">FOLLOW US</Typography>
            <div className="space-y-2">
              <Typography><Link href="#" color="inherit" underline="none">Twitter</Link></Typography>
              <Typography><Link href="#" color="inherit" underline="none">LinkedIn</Link></Typography>
              <Typography><Link href="#" color="inherit" underline="none">Instagram</Link></Typography>
            </div>
          </Grid>
        </Grid>
        <div className="mt-8 text-center">
          <Typography variant="body2" className='flex justify-between'>
            ©2023. All Rights Reserved. 

            <span>Supreme house: 110, 16th Road, Chembur, Mumbai - 400071.</span>
          </Typography>
        
        </div>
      </Container>
    </div>
  );
};

export default Footer;
