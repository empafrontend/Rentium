import {
  AddCircleOutlineRounded,
  HomeOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import headerImg from './Assets/header-img.png';
import './header.css';

function Header() {
  return (
    <Box className="header">
      <Box component="img" src={headerImg} sx={{ width: '8rem' }}></Box>
      <Typography variant="h3">Rentium</Typography>
      <Box className="navigation">
        <HomeOutlined className="icon" sx={{ fontSize: '2.5rem' }} />
        <SearchOutlined className="icon" sx={{ fontSize: '2.5rem' }} />
        <AddCircleOutlineRounded className="icon" sx={{ fontSize: '2.5rem' }} />
        <PersonOutlineOutlined className="icon" sx={{ fontSize: '2.5rem' }} />
      </Box>
    </Box>
  );
}

export default Header;
