import {
  AddCircleOutlineRounded,
  HomeOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationContext } from './Context/NavigationContext';
import { useUser } from './Context/UserContextProvider';
import './header.css';

function Header() {
  const { user } = useUser();
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
            <Link to="/">
              <HomeOutlined className="icon" fontSize="large" />
            </Link>
            <SearchOutlined className="icon" fontSize="large" />
            <Link
              className={!user.uid ? 'hidden' : 'icon'}
              to={!user.uid ? '/sign-in' : '/new-ad'}
            >
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
      ) : (
        <Box className="expanded-header">
          <Box className="upper-content">
            <Link to="/">
              <Box className="logo" onClick={handleHeaderLayout} />
            </Link>
            <Box className="navigation">
              <Link to="/">
                <HomeOutlined className="icon" fontSize="large" />
              </Link>
              <SearchOutlined className="icon" fontSize="large" />
              <Link
                className={!user.uid ? 'hidden' : 'icon'}
                to={!user.uid ? '/sign-in' : '/new-ad'}
              >
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
