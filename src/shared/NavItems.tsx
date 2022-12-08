import { Avatar, Typography } from '@mui/material';
import { IconHome, IconPlus, IconSearch, IconUserCircle } from '@tabler/icons';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavigationContext } from '../Context/NavigationContext';
import { useUser } from '../Context/UserContextProvider';
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

  const { currentUser } = useUser();

  return (
    <>
      <Link to="/" className="link" onClick={() => goToHomeView()}>
        <IconHome size={28} stroke={1} />
        <Typography variant="h5" component="h3" mt={0.7}>
          Hem
        </Typography>
      </Link>

      <Link to="/" className="link">
        {/* link to be adjusted */}
        {/* put this when link for search is implemented: onClick={() => handleHeaderSize()} */}
        <IconSearch size={28} stroke={1} />
        <Typography variant="h5" component="h3" mt={0.7}>
          Sök
        </Typography>
      </Link>

      {currentUser ? (
        <Link to="/new-ad" className="link" onClick={() => handleHeaderSize()}>
          <IconPlus size={28} stroke={1} />
          <Typography variant="h5" component="h3" mt={0.7}>
            Lägg till
          </Typography>
        </Link>
      ) : null}

      {currentUser ? (
        <Link to="/my-page" className="link" onClick={() => handleHeaderSize()}>
          <Avatar
            alt={
              currentUser.displayName
                ? currentUser.displayName
                : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  currentUser.email!
            }
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            src={currentUser.photoURL!}
            sx={{ width: 28, height: 28 }}
          />
          <Typography variant="h5" component="h3" mt={0.7}>
            {currentUser.displayName}
          </Typography>
        </Link>
      ) : (
        <Link to="/sign-in" className="link" onClick={() => handleHeaderSize()}>
          <IconUserCircle size={28} stroke={1} />
          <Typography variant="h5" component="h3" mt={0.7}>
            Logga in
          </Typography>
        </Link>
      )}
    </>
  );
};

export default NavItems;
