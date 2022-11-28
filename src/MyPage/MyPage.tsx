import { Box, Button, Typography } from '@mui/material';
import ads from '../adsData.js';
import AdCard from '../shared/AdCard';
import ContentContainer from '../shared/ContentContainer';

const MyPage = () => {
  return (
    <ContentContainer background="#F5F5F5">
      <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 5 }}>
        <Typography component="h1" variant="h3" mb={-1} fontWeight={600}>
          Hej lindqvistsara!
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
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography component="h2" variant="h4" mb={-1}>
            Bokningsförfrågningar ({ads.length})
            {/* TODO: number to be adjusted based on src */}
            {/* TODO: add filter */}
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
            {ads.map((ad, index) => (
              <AdCard
                key={index}
                title={ad.title}
                img={ad.img}
                author={ad.author}
                price={ad.price}
                isRequest
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography component="h2" variant="h4" mb={-1}>
            Mina annonser (
            {ads.filter((ad) => ad.author !== 'lindqvistsara').length}){' '}
            {/* TODO: filter is in but should change author string to correct user */}
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
            {/* TODO: change to correct data src */}
            {/* TODO: filter is in but should change author string to correct user */}
            {ads
              .filter((ad) => ad.author !== 'lindqvistsara')
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
  );
};

export default MyPage;
