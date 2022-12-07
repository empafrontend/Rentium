import { Box, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationContext } from './Context/NavigationContext';
import './header.css';
import NavItems from './shared/NavItems';

function Header() {
  const { filterNavigation, setFilterNavigation } =
    useContext(NavigationContext);
  const [expandHeader, setExpandHeader] = useState(true);

  const handleHeaderLayout = () => {
    setFilterNavigation(false);
    if (filterNavigation === false) {
      setExpandHeader(true);
    }
  };

  return (
    <Box>
      {filterNavigation ? (
        <Box className="header">
          <Link to="/">
            <Box className="logo" onClick={handleHeaderLayout} />
          </Link>
          <Box className="navigation">
            <NavItems />
          </Box>
        </Box>
      ) : (
        <Box className="expanded-header">
          <Box className="upper-content">
            <Link to="/">
              <Box className="logo" onClick={handleHeaderLayout} />
            </Link>
            <Box className="navigation">
              <NavItems />
            </Box>
          </Box>
          <Box className="heading">
            <Typography variant="h2" sx={{ color: 'white' }}>
              Välkommen till Rentium!
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'white' }}>
              Hyresplatsen för smarta göteborgare
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Header;
