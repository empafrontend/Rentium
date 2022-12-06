import { LocationOnOutlined } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AdContext } from './Context/AdContextProvider';

import './footer.css';
import ContentContainer from './shared/ContentContainer';

function Profile() {
  const { ads } = useContext(AdContext);
  const params = useParams<{ id: string }>();

  const user = () => {
    return ads.filter((ad) => ad.authorId === params.id);
  };

  const showToastMessage = () => {
    toast.success('Din bokningsförfrågan har blivit skickad.', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

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
          {user().map((ad) => ad.author)[0] + 's annonser'} ({user().length}){' '}
        </Typography>

        {user().map((ad, index) => (
          <Card
            className="card"
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '60%',
              height: 'fit-content',
              borderRadius: '20px 20px 20px 0',
              boxShadow: '0 2px 10px #DDDBD5',
              mt: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                padding: '1rem 1rem 1rem 1rem',
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
                    {ad.price} kr
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey' }}>
                    <LocationOnOutlined sx={{ fontSize: '.8rem' }} />{' '}
                    {ad.location}
                  </Typography>
                </Box>
                <Typography
                  pb={3}
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: 'right' }}
                >
                  {'Inlagd 24-11-2022'} {/* insert date from data */}
                </Typography>
              </CardContent>
            </Box>
            <Box
              sx={{
                width: '100%',
                height: 35,
                mt: 1,
              }}
            >
              <Button
                variant="contained"
                onClick={showToastMessage}
                sx={{ width: '100%', borderRadius: '20px 0 0 0' }}
              >
                Skicka bokningsförfrågan
                {/* To be added: some sort of confirmation when this button is clicked */}
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </ContentContainer>
  );
}

export default Profile;
