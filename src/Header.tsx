import { Box } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavigationContext } from './Context/NavigationContext';
import './header.css';
import NavItems from './shared/NavItems';

function Header() {
  const { filterNavigation, setFilterNavigation } =
    useContext(NavigationContext);

  return (
    <Box className="header">
      <Link to="/">
        <Box className="logo" onClick={() => setFilterNavigation(false)} />
      </Link>
      <Box className="navigation">
        <NavItems />
      </Box>
    </Box>
  );
}

export default Header;
