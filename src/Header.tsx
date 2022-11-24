import {
  AddCircleOutlineRounded,
  HomeOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import { Box } from '@mui/material';
import Logo from './Assets/rentium-logo.png';
import './header.css';

function Header() {
  return (
    <Box className="header">
      <Box component="img" src={Logo} className="logo"></Box>
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
