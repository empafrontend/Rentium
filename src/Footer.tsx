import {
  AddCircleOutlineRounded,
  HomeOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import { Box } from '@mui/material';
import './footer.css';

function Footer() {
  return (
    <Box className="footer">
      <Box className="footer-navigation">
        <HomeOutlined className="icon" sx={{ fontSize: '2.5rem' }} />
        <SearchOutlined className="icon" sx={{ fontSize: '2.5rem' }} />
        <AddCircleOutlineRounded className="icon" sx={{ fontSize: '2.5rem' }} />
        <PersonOutlineOutlined className="icon" sx={{ fontSize: '2.5rem' }} />
      </Box>
    </Box>
  );
}

export default Footer;
