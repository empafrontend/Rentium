import { LocationOnOutlined } from '@mui/icons-material';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ads from '../adsData.js';
import ContentContainer from '../shared/ContentContainer';
import './feed.css';

function Feed() {
  //const { ads } = useContext(AdContext);

  return (
    <ContentContainer>
      <Typography variant="h5">Nya annonser</Typography>
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
              boxShadow: 'none',
            }}
          >
            <Link to={`/ad/${ads.id}`}>
              <CardMedia
                component="img"
                image={ads.img}
                alt={ads.title}
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
                  <Typography variant="caption">{ads.price} kr</Typography>
                </Box>
              </CardContent>
            </Link>
          </Card>
        ))}
      </Box>
    </ContentContainer>
  );
}

export default Feed;
