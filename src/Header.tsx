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
import { useUser } from './Context/UserContextProvider';
import './header.css';

function Header() {
  const { user } = useUser();
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
        <Link to={!user.uid ? '/sign-in' : '/new-ad'}>
          <AddCircleOutlineRounded className="icon" fontSize="large" />
        </Link>
        <Link to={!user.uid ? '/sign-in' : '/my-page'}>
          {!user.uid ? (
            <PersonOutlineOutlined className="icon" fontSize="large" />
          ) : (
            <Box
              component="img"
              className="img-icon icon:hover"
              src={user.photoURL}
              alt={user.displayName}
            />
          )}
        </Link>
      </Box>
    </Box>
  );
}

export default Header;
