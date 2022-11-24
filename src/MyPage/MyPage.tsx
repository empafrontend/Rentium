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
      }}
    >
      <Typography component="h1" variant="h3" mb={-1}>
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
          }}
        >
          Visa profil
        </Button>
      </Box>
      <Typography component="h2" variant="h4" mb={-1}>
        Bokningsförfrågningar (2)
        {/* number to be inserted from data */}
      </Typography>
      {ads.map((ad) => (
        <AdCard
          title={ad.title}
          img={ad.img}
          author="lorem89" // hard code for now as this is not found in the local data
          price={199} // hard code for now as the price in local data is string but this is number
          isRequest
        />
      ))}

      <Typography component="h2" variant="h4" mb={-1}>
        Mina annonser (18)
        {/* number to be inserted from data */}
      </Typography>
      {ads.map((ad) => (
        <AdCard
          title={ad.title}
          img={ad.img}
          author="lorem89" // hard code for now as this is not found in the local data
          price={199} // hard code for now as the price in local data is string but this is number
        />
      ))}
    </Container>
  );
};

export default MyPage;
