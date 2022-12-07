import { Box } from '@mui/material';
import './footer.css';
import NavItems from './shared/NavItems';

function Footer() {
  return (
    <Box className="footer">
      <Box className="footer-navigation">
        <NavItems />
      </Box>
    </Box>
  );
}

export default Footer;
