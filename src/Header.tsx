import {
  AddCircleOutlineRounded,
  HomeOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import { Box } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavigationContext } from './Context/NavigationContext';
import { auth } from './firebase';
import './header.css';

function Header() {
  const { filterNavigation, setFilterNavigation } =
    useContext(NavigationContext);
  return (
    <Box className="header">
      <Link to="/">
        <Box className="logo" onClick={() => setFilterNavigation(false)} />
      </Link>

      <Box className="navigation">
        <Link to="/">
          <HomeOutlined className="icon" fontSize="large" />
        </Link>
        <SearchOutlined className="icon" fontSize="large" />
        <Link to={!auth.currentUser ? '/sign-in' : '/new-ad'}>
          <AddCircleOutlineRounded className="icon" fontSize="large" />
        </Link>
        <Link to={!auth.currentUser ? '/sign-in' : '/my-page'}>
          {!auth.currentUser ? (
            <PersonOutlineOutlined className="icon" fontSize="large" />
          ) : (
            <Box
              component="img"
              className="img-icon icon:hover"
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              src={auth.currentUser.photoURL!}
            />
          )}
        </Link>
      </Box>
    </Box>
  );
}

export default Header;
