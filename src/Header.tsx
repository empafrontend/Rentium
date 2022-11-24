import {
  AddCircleOutlineRounded,
  HomeOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from './Assets/rentium-logo.png';
import './header.css';

function Header() {
  return (
    <Box className="header">
      <Box component="img" src={Logo} sx={{ width: '8rem' }} />
      <Box className="navigation">
        <Link to="/">
          <HomeOutlined className="icon" sx={{ fontSize: '2.5rem' }} />
        </Link>
        <SearchOutlined className="icon" sx={{ fontSize: '2.5rem' }} />
        <AddCircleOutlineRounded className="icon" sx={{ fontSize: '2.5rem' }} />
        <Link to="/sign-in">
          <PersonOutlineOutlined className="icon" sx={{ fontSize: '2.5rem' }} />
        </Link>
      </Box>
    </Box>
  );
}

export default Header;
