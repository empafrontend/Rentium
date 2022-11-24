import { Box, Button, Container, Typography } from '@mui/material';
import ads from '../adsData.js';
import AdCard from '../shared/AdCard';

const MyPage = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: 5,
        background: '#F5F5F5',
        minHeight: 'calc(100vh - ?)', // ? = height of header + height of rooter
        pb: 5, // for now
      }}
    >
      <Typography component="h1" variant="h3" mb={-1} fontWeight={600}>
        Hej lindqvistsara!
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
        <Button variant="contained">Redigera profil</Button>
        <Button
          variant="contained"
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
          {/* number to be adjusted based on src */}
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
          {ads.map((ad, index) => (
            <AdCard
              key={index}
              title={ad.title}
              img={ad.img}
              author="lorem89" // hard code for now as this is not found in the local data
              price={199} // hard code for now as the price in local data is string but this is number
              isRequest
            />
          ))}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography component="h2" variant="h4" mb={-1}>
          Mina annonser ({ads.length}){' '}
          {/* number to be adjusted based on src */}
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
          {ads.map((ad, index) => (
            <AdCard
              key={index}
              title={ad.title}
              img={ad.img}
              author="lorem89" // hard code for now as this is not found in the local data
              price={199} // hard code for now as the price in local data is string but this is number
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default MyPage;
