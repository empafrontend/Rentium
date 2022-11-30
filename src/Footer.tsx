import {
  AddCircleOutlineRounded,
  HomeOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useUser } from './Context/UserContextProvider';
import './footer.css';

function Footer() {
  const { user } = useUser();
  return (
    <Box className="footer">
      <Box className="footer-navigation">
        <Link to="/">
          <HomeOutlined className="icon" sx={{ fontSize: '2.5rem' }} />
        </Link>
        <SearchOutlined className="icon" sx={{ fontSize: '2.5rem' }} />
        <AddCircleOutlineRounded className="icon" sx={{ fontSize: '2.5rem' }} />
        <Link to={user ? '/my-page' : '/sign-in'}>
          <PersonOutlineOutlined className="icon" sx={{ fontSize: '2.5rem' }} />
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
