import { LocationOnOutlined } from '@mui/icons-material';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import ads from './adsData';
import './footer.css';
import ContentContainer from './shared/ContentContainer';

function Profile() {
  return (
    <ContentContainer background="#F5F5F5">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            marginLeft: '1rem',
            paddingTop: '2rem',
            paddingBottom: '2rem',
          }}
        >
          Lindqvistsara's annonser (
          {ads.filter((ad) => ad.author !== 'lindqvistsara').length}){' '}
        </Typography>

        {ads
          .filter((ad) => ad.author !== 'lindqvistsara')
          .map((ad, index) => (
            <Card
              className="card"
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                pl: 1,
                width: '60%',
                height: 120,
              }}
            >
              <CardMedia
                component="img"
                image={ad.img}
                alt="img"
                sx={{
                  borderRadius: 3,
                  width: 100,
                  height: 100,
                }}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  height: 120,
                }}
              >
                <Typography variant="body1" fontWeight={600}>
                  {ad.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {ad.description}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    pt: 4,
                  }}
                >
                  <Typography variant="body1" fontWeight={400}>
                    Pris: {ad.price}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey' }}>
                    <LocationOnOutlined sx={{ fontSize: '.8rem' }} />{' '}
                    {ad.location}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
      </Box>
    </ContentContainer>
  );
}

export default Profile;
