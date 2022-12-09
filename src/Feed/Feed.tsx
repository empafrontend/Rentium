import { LocationOnOutlined } from '@mui/icons-material';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdContext } from '../Context/AdContextProvider';
import { NavigationContext } from '../Context/NavigationContext';
import { formatZeroPrice, onImageError } from '../helper';
import ContentContainer from '../shared/ContentContainer';
import './feed.css';

function Feed() {
  const { ads, getAds } = useContext(AdContext);

  const { filterNavigation, setFilterNavigation } =
    useContext(NavigationContext);

  useEffect(() => {
    getAds();
  }, []);

  return (
    <ContentContainer>
      <Typography variant="subtitle1" sx={{ padding: '1rem' }}>
        Nya annonser
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {ads.map((ads, index) => (
          <Card
            className="card"
            key={index}
            sx={{
              marginTop: '1rem',
              width: '13.5rem',
              height: '14rem',
              borderRadius: 3,
              boxShadow: 'none',
            }}
            onClick={() => setFilterNavigation(true)}
          >
            <Link to={`/ad/${ads.id}`}>
              <CardMedia
                component="img"
                onError={onImageError}
                image={ads.img}
                alt={ads.title}
                sx={{
                  borderRadius: 3,
                  width: '100%',
                  height: '10rem',
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
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="caption" sx={{ color: 'grey' }}>
                    <LocationOnOutlined sx={{ fontSize: '.8rem' }} />{' '}
                    {ads.location}
                  </Typography>
                  <Typography variant="caption">
                    {formatZeroPrice(ads.price)}
                  </Typography>
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
