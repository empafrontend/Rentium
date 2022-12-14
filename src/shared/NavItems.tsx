import { Avatar, Badge, Typography } from '@mui/material';
import { IconHome, IconPlus, IconUserCircle } from '@tabler/icons';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAd } from '../Context/AdContextProvider';
import { NavigationContext } from '../Context/NavigationContext';
import { useUser } from '../Context/UserContextProvider';
import './navItems.css';

const NavItems = () => {
  const { isLandingPage, setIsLandingPage } = useContext(NavigationContext);

  const handleHeaderSize = () => {
    if (isLandingPage === true) {
      setIsLandingPage(false);
    }
  };

  const goToHomeView = () => {
    setIsLandingPage(true);
  };

  const { currentUser } = useUser();
  const { generatePendingReq } = useAd();

  return (
    <>
      <Link to="/" className="link" onClick={() => goToHomeView()}>
        <IconHome size={28} stroke={1} />
        <Typography variant="h5" component="h3" mt={0.7}>
          Hem
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
          <Badge
            badgeContent={generatePendingReq().length}
            color="warning"
            sx={{
              '& .MuiBadge-badge': { fontSize: 9, height: 15, minWidth: 15 },
            }}
          >
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
          </Badge>
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
