import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavigationContext } from './Context/NavigationContext';
import './header.css';
import NavItems from './shared/NavItems';

function Header() {
  const { isLandingPage, setIsLandingPage, setShowFreeAds } =
    useContext(NavigationContext);

  const handleHeaderGrow = () => {
    setIsLandingPage(true);
    setShowFreeAds(false);
  };

  return (
    <header>
      {isLandingPage ? (
        <Box className="expanded-header">
          <Box className="upper-content">
            <Link to="/">
              <Box className="logo" onClick={handleHeaderGrow} />
            </Link>
            <Box className="navigation">
              <NavItems />
            </Box>
          </Box>
          <Box className="heading">
            <Typography variant="h2" component="h1" sx={{ color: 'white' }}>
              Välkommen till Rentium!
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'white' }}>
              Hyresplatsen för smarta göteborgare
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box className="header">
          <Link to="/">
            <Box className="logo" onClick={handleHeaderGrow} />
          </Link>
          <Box className="navigation">
            <NavItems />
          </Box>
        </Box>
      )}
    </header>
  );
}

export default Header;
