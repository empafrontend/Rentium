import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import ads from './adsData';
import './footer.css';
import ContentContainer from './shared/ContentContainer';

function Profile() {
  return (
    <ContentContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography component="h2" variant="h4" mb={1} fontWeight={400}>
          Lindqvistsara's annonser (
          {ads.filter((ad) => ad.author !== 'lindqvistsara').length}){' '}
          {/* TODO: filter is in but should change author string to correct user */}
        </Typography>
        <Card
          sx={{
            borderRadius: '20px 20px 20px 0',
            boxShadow: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {ads
            .filter((ad) => ad.author !== 'lindqvistsara')
            .map((ad, index) => (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  mb: 3,
                }}
              >
                <CardMedia
                  component="img"
                  alt={ad.title}
                  image={ad.img}
                  sx={{ borderRadius: 3, width: 100, height: 100, rowGap: 5 }}
                />
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    placeContent: 'center',
                    pl: 1,
                  }}
                >
                  <Typography variant="body1" fontWeight={600}>
                    {ad.title}
                  </Typography>
                  <Typography variant="body1" fontWeight={400}>
                    {ad.price} kr
                  </Typography>
                </CardContent>
              </Box>
            ))}
        </Card>
      </Box>
    </ContentContainer>
  );
}

export default Profile;
