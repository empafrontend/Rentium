import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import ads from './adsData';
import { useUser } from './Context/UserContextProvider';
import ContentContainer from './shared/ContentContainer';

{
  /* Detailpage */
}
function AdPage() {
  // const newads = useContext(AdContext).ads;
  const params = useParams<{ id: string }>();
  const { user } = useUser();

  // const ads = newads.find((ad) => ad.id === params?.id);
  // if (!ads) return null;

  const singleAd = () => {
    const arr = ads
      .filter((ad) => ad.id === params.id)
      .flatMap((ad) => {
        return ad;
      });
    return Object.assign({}, ...arr);
  };

  return (
    <ContentContainer>
      <Box
        maxWidth={350}
        minWidth={300}
        margin="auto"
        sx={{ display: 'flex', flexDirection: 'column', rowGap: 0.5 }}
      >
        {/* the border radius is not working? */}
        <CardMedia
          component="img"
          sx={{
            borderRadius: '1rem',
          }}
          src={singleAd().img}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            mr: '.5rem',
            ml: '.5rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '12px',
                display: 'flex',
                fontWeight: '300',
                mr: '5px',
              }}
            >
              Inlagd: {singleAd().createdAt}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#6860CC',
                fontSize: '12px',
                display: 'flex',
                fontWeight: '300',
              }}
            >
              {singleAd().location}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: '#343232',
              fontSize: '12px',
              display: 'flex',
              fontWeight: '400',
              alignItems: 'center',
            }}
          >
            <Link to={`/profile/${singleAd().authorId}`}>
              <PersonOutlineIcon
                sx={{ fontSize: '1rem', m: '2px', color: '#343232' }}
              />
              {singleAd().author}
            </Link>
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: '2rem',
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: '#343232', fontWeight: '500', fontSize: '20px' }}
          >
            {singleAd().title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '12px',
                display: 'flex',
                fontWeight: '300',
                mr: '5px',
              }}
            >
              Datum:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#6860CC',
                fontSize: '12px',
                display: 'flex',
                fontWeight: '300',
              }}
            >
              {singleAd().startDate} - {singleAd().endDate}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: '#2D3142',
              display: 'flex',
              fontSize: '14px',
              fontWeight: '700',
              alignItems: 'center',
            }}
          >
            {singleAd().price} kr
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            fontSize: '13px',
            mt: '1rem',
            mb: '1rem',
            lineHeight: '22px',
            fontWeight: '300',
          }}
        >
          {singleAd().description}
        </Typography>
        {!user.uid ? (
          <Typography>
            You have to log in before sending a booking request.
          </Typography>
        ) : (
          <Button
            variant="contained"
            onClick={() => console.log('sending request')}
          >
            Skicka bokningsförfrågan
          </Button>
        )}
      </Box>
    </ContentContainer>
  );
}

export default AdPage;
