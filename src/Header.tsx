import {
  AddCircleOutlineRounded,
  HomeOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import { Box } from '@mui/material';
import './header.css';

function Header() {
  return (
    <Box className="header">
      <Box className="logo" />
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
