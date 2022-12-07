import { Avatar, Typography } from '@mui/material';
import { IconHome, IconPlus, IconSearch, IconUserCircle } from '@tabler/icons';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavigationContext } from '../Context/NavigationContext';
import { auth } from '../firebase';
import './navItems.css';

const NavItems = () => {
  const { filterNavigation, setFilterNavigation } =
    useContext(NavigationContext);

  const handleHeaderSize = () => {
    if (filterNavigation === false) {
      setFilterNavigation(true);
    }
  };

  const goToHomeView = () => {
    setFilterNavigation(false);
  };

  return (
    <>
      <Link to="/" className="link" onClick={() => goToHomeView()}>
        <IconHome size={32} stroke={1} />
        <Typography variant="h5" component="h3" mt={0.7}>
          Hem
        </Typography>
      </Link>

      <Link to="/" className="link">
        {/* link to be adjusted */}
        <IconSearch size={32} stroke={1} />
        <Typography variant="h5" component="h3" mt={0.7}>
          Sök
        </Typography>
      </Link>

      {auth.currentUser ? (
        <Link to="/new-ad" className="link">
          <IconPlus size={32} stroke={1} />
          <Typography variant="h5" component="h3" mt={0.7}>
            Lägg till
          </Typography>
        </Link>
      ) : null}

      {auth.currentUser ? (
        <Link to="/my-page" className="link">
          <Avatar
            alt={
              auth.currentUser.displayName
                ? auth.currentUser.displayName
                : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  auth.currentUser.email!
            }
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            src={auth.currentUser.photoURL!}
            sx={{ width: 32, height: 32 }}
          />
          <Typography variant="h5" component="h3" mt={0.7}>
            {auth.currentUser.displayName}
          </Typography>
        </Link>
      ) : (
        <Link to="/sign-in" className="link" onClick={() => handleHeaderSize()}>
          <IconUserCircle size={32} stroke={1} />
          <Typography variant="h5" component="h3" mt={0.7}>
            Logga in
          </Typography>
        </Link>
      )}
    </>
  );
};

export default NavItems;
