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
        <Box>
          <Link to="/">
            <HomeOutlined className="icon" fontSize="large" />
            <h3>Hem</h3>
          </Link>
        </Box>
        <Box>
          <SearchOutlined className="icon" fontSize="large" />
          <h3>Sök</h3>
        </Box>
        <Box>
          <Link
            className={!auth.currentUser ? 'hidden' : 'icon'}
            to={!auth.currentUser ? '/sign-in' : '/new-ad'}
          >
            <AddCircleOutlineRounded className="icon" fontSize="large" />
            <h3>Ny Annons</h3>
          </Link>
        </Box>
        <Box>
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
            <h3>Min Profil</h3>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
