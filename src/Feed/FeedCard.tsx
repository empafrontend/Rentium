import { LocationOnOutlined } from '@mui/icons-material';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Container } from '@mui/system';
import ads from '../adsData';
import './feed.css';

function FeedCard() {
  return (
    <Container sx={{ height: '100%', marginTop: '8rem', overflow: 'scroll' }}>
      <Typography
        variant="h5"
        sx={{
          marginLeft: '1rem',
          paddingTop: '2rem',
          paddingBottom: '2rem',
        }}
      >
        Nya annonser
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          width: '100%',
          paddingBottom: '2rem',
        }}
      >
        {ads.map((ads, index) => (
          <Card
            className="card"
            key={index}
            sx={{
              width: '10.2rem',
              height: '14rem',
              borderRadius: '1rem',
            }}
          >
            <CardMedia
              component="img"
              image={ads.img}
              alt="Produktbild"
              sx={{
                borderRadius: '1rem',
                width: '100%',
                height: '9rem',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="subtitle2">
                {ads.title}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="caption" sx={{ color: 'grey' }}>
                  <LocationOnOutlined sx={{ fontSize: '.8rem' }} />{' '}
                  {ads.location}
                </Typography>
                <Typography variant="caption">Pris: {ads.price}</Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default FeedCard;
