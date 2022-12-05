import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAd } from './Context/AdContextProvider';
import { auth } from './firebase';
import ContentContainer from './shared/ContentContainer';

{
  /* Detailpage */
}
function AdPage() {
  const params = useParams<{ id: string }>();
  const { getOneAd, singleAd } = useAd();

  useEffect(() => {
    if (params.id) {
      getOneAd(params.id);
    }
  }, []);

  const showToastMessage = () => {
    toast.success('Din bokningsförfrågan har blivit skickad.', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
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
          src={singleAd.img}
        ></CardMedia>
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
              {/* Inlagd: {singleAd.createdAt} */}
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
              {singleAd.location}
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
            <Link to={`/profile/${singleAd.authorId}`}>
              <PersonOutlineIcon
                sx={{ fontSize: '1rem', m: '2px', color: '#343232' }}
              />

              {singleAd.author}
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
            {singleAd.title}
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
              {singleAd.startDate} - {singleAd.endDate}
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
            {singleAd.price} kr
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
          {singleAd.description}
        </Typography>
        {!auth.currentUser ? (
          <Typography>
            You have to log in before sending a booking request.
          </Typography>
        ) : (
          <>
            <Button variant="contained" onClick={showToastMessage}>
              Skicka bokningsförfrågan
            </Button>
            <ToastContainer />
          </>
        )}
      </Box>
    </ContentContainer>
  );
}

export default AdPage;
