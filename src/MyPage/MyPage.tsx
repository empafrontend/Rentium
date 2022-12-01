import { Box, Button, Typography } from '@mui/material';
import { useContext } from 'react';
import { AdContext } from '../Context/AdContextProvider';
/* import ads from '../adsData.js'; */
import { useUser } from '../Context/UserContextProvider';
import Protected from '../Protected';
import AdCard from '../shared/AdCard';
import ContentContainer from '../shared/ContentContainer';

const MyPage = () => {
  const { ads } = useContext(AdContext);
  const { user, handleSignOut } = useUser();

  return (
    <Protected>
      <ContentContainer background="#F5F5F5">
        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 5 }}>
          <Typography component="h1" variant="h3" mb={-1} fontWeight={600}>
            Hej {user?.displayName}!
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
            <Button
              variant="contained"
              onClick={() => console.log('edit profile')} // TODO: insert correct function / link
            >
              Redigera profil
            </Button>
            <Button
              variant="contained"
              onClick={() => console.log('show profile')} // TODO: insert correct function / link
              sx={{
                background: '#fff',
                border: 'solid #5D6DD8 2px',
                color: '#5D6DD8',
                '&:hover': { background: '#ECEFFF' },
              }}
            >
              Visa profil
            </Button>
            <Button
              variant="contained"
              onClick={handleSignOut}
              sx={{
                background: 'none',
                color: '#5D6DD8',
                '&:hover': { background: '#ECEFFF' },
              }}
            >
              Logga ut
            </Button>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography component="h2" variant="h4" mb={-1}>
              Bokningsförfrågningar (
              {ads
                .filter((ad) => ad.authorId === user.uid)

                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

                .reduce((prevBk, bk) => prevBk + bk.bookingRequests!.length, 0)}
              )
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
              {/* TODO: change to correct data src with filter */}
              {ads
                .filter((ad) => ad.authorId === user.uid)
                .map((ad, index) => (
                  <AdCard
                    key={index}
                    title={ad.title}
                    img={ad.img}
                    author={ad.author}
                    price={ad.price}
                    bookingRequests={ad.bookingRequests}
                    isRequest
                  />
                ))}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography component="h2" variant="h4" mb={-1}>
              Mina annonser (
              {ads.filter((ad) => ad.authorId === user.uid).length}){' '}
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
              {ads
                .filter((ad) => ad.authorId === user.uid)
                .map((ad, index) => (
                  <AdCard
                    key={index}
                    title={ad.title}
                    img={ad.img}
                    author={ad.author}
                    price={ad.price}
                  />
                ))}
            </Box>
          </Box>
        </Box>
      </ContentContainer>
    </Protected>
  );
};

export default MyPage;
