import { Box, Typography } from '@mui/material';
import './footer.css';
import NavItems from './shared/NavItems';

function Footer() {
  return (
    <footer className="footer">
      <Box className="footer-navigation">
        <NavItems />
      </Box>
      <Typography className="footer-disclaimer" variant="body2" color="white">
        Rentium 2022 © Alla rättigheter förbehållna.
      </Typography>
    </footer>
  );
}

export default Footer;
