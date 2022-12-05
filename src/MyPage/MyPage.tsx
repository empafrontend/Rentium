import { Box, Button, Typography } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdContext } from '../Context/AdContextProvider';
import { useUser } from '../Context/UserContextProvider';
import { auth } from '../firebase';
import Protected from '../Protected';
import AdCard from '../shared/AdCard';
import ContentContainer from '../shared/ContentContainer';

const MyPage = () => {
  const navigate = useNavigate();
  const { ads } = useContext(AdContext);
  const { handleSignOut } = useUser();

  const adsFromCurrentUser = () => {
    return ads.filter((ad) => ad.authorId === auth.currentUser?.uid);
  };

  const generateBookingReq = () => {
    return adsFromCurrentUser().flatMap((ad) =>
      ad.bookingRequests?.map((requestor) => {
        return { ...ad, requestor: requestor };
      })
    );
  };

  return (
    <Protected>
      <ContentContainer background="#F5F5F5">
        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 5 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 1,
              placeItems: 'center',
            }}
          >
            <Typography component="h1" variant="h3" mb={-1} fontWeight={600}>
              Hej {auth.currentUser?.displayName}!
            </Typography>
            <Button
              variant="contained"
              onClick={handleSignOut}
              sx={{
                mt: 1,
                background: 'none',
                color: '#5D6DD8',
                '&:hover': { color: '#3335A7', background: 'none' },
              }}
            >
              Logga ut
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 3,
            }}
          >
            <Button
              variant="contained"
              onClick={() => console.log('edit profile')} // TODO: insert correct function / link
            >
              Redigera profil
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate(`/profile/${auth.currentUser?.uid}`)}
              sx={{
                background: '#fff',
                border: 'solid #5D6DD8 2px',
                color: '#5D6DD8',
                '&:hover': { background: '#ECEFFF' },
              }}
            >
              Visa profil
            </Button>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography component="h2" variant="h4" mb={-1}>
              Bokningsförfrågningar ({generateBookingReq().length})
            </Typography>
            <Box
              height={190}
              columnGap={2}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                overflowX: 'scroll',
                '::-webkit-scrollbar': { display: 'none' },
              }}
            >
              {!generateBookingReq().length ? (
                <Typography alignSelf="center" mx="auto">
                  Du har inga bokningsförfrågningar att visa.
                </Typography>
              ) : (
                generateBookingReq().map((req, index) => (
                  <AdCard
                    key={index}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    ad={req!}
                    isRequest
                  />
                ))
              )}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography component="h2" variant="h4" mb={-1}>
              Mina annonser ({adsFromCurrentUser().length})
            </Typography>
            <Box
              height={190}
              columnGap={2}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                overflowX: 'scroll',
                '::-webkit-scrollbar': { display: 'none' },
              }}
            >
              {!adsFromCurrentUser().length ? (
                <Typography alignSelf="center" mx="auto">
                  Du har inga annonser att visa.
                </Typography>
              ) : (
                adsFromCurrentUser().map((ad, index) => (
                  <AdCard key={index} ad={ad} />
                ))
              )}
            </Box>
          </Box>
        </Box>
      </ContentContainer>
    </Protected>
  );
};

export default MyPage;
