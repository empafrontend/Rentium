import {
  AddCircleOutlineRounded,
  HomeOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <Box className="header">
      <Box className="logo" />
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