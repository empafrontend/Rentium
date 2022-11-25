import { Box, Button, Container, Typography } from '@mui/material';
import ads from '../adsData.js';
import AdCard from '../shared/AdCard';

const MyPage = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        background: '#F5F5F5',
        minHeight: 'calc(100vh - ?)', // TODO: ? = height of header + height of rooter
        pb: 5, // TODO: adjust after added header and footer
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: 5,
          background: '#F5F5F5',
        }}
      >
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
            {ads.map((ad, index) => (
              <AdCard
                key={index}
                title={ad.title}
                img={ad.img}
                author="lorem89" // TODO: insert from data
                price={199} // TODO: insert from data (should always be number)
                isRequest
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography component="h2" variant="h4" mb={-1}>
            Mina annonser ({ads.length}){' '}
            {/* TODO: change to correct data src */}
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
            {ads.map((ad, index) => (
              <AdCard
                key={index}
                title={ad.title}
                img={ad.img}
                author="lorem89" // TODO: insert from data
                price={199} // TODO: insert from data (should always be number)
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default MyPage;
