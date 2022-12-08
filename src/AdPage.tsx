import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookingRequest, useAd } from './Context/AdContextProvider';
import { useUser } from './Context/UserContextProvider';
import { formatZeroPrice } from './helper';
import ContentContainer from './shared/ContentContainer';

{
  /* Detailpage */
}
function AdPage() {
  const params = useParams<{ id: string }>();
  const { getOneAd, singleAd, sendOffer } = useAd();
  const { currentUser } = useUser();

  useEffect(() => {
    if (params.id) {
      getOneAd(params.id);
    }
  }, [sendOffer]);

  return (
    <ContentContainer backButton>
      <Box
        maxWidth={350}
        minWidth={300}
        margin="auto"
        sx={{ display: 'flex', flexDirection: 'column', rowGap: 0.5 }}
      >
        <CardMedia
          component="img"
          sx={{ borderRadius: '1rem' }}
          src={singleAd.img}
        />
        <Box
          mx=".5rem"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              placeContent: 'center',
            }}
          >
            <Typography
              mr="5px"
              variant="body2"
              sx={{ fontSize: '12px', display: 'flex' }}
            >
              Inlagd:{' '}
              {singleAd.createdAt
                ? singleAd.createdAt
                    .toDate()
                    .toDateString()
                    .replace(/^\S+\s/, '')
                : 'nodate'}{' '}
              {/* this if statement should be removed in final testing */}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#6860CC',
                fontSize: '12px',
                display: 'flex',
              }}
            >
              {singleAd.location}
            </Typography>
          </Box>
          <Typography
            variant="body2"
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
                sx={{ fontSize: '1rem', mx: '2px', color: '#343232' }}
              />
              {singleAd.author}
            </Link>
          </Typography>
        </Box>
        <Box mt="2rem" sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: '500' }}>
            {singleAd.title}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: '12px',
                display: 'flex',
                mr: '5px',
              }}
            >
              Datum:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#6860CC',
                fontSize: '12px',
                display: 'flex',
              }}
            >
              {singleAd.startDate} - {singleAd.endDate}
            </Typography>
          </Box>
          <Typography variant="body1" fontWeight={700}>
            {formatZeroPrice(singleAd.price)}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            fontSize: '13px',
            my: '1rem',
            lineHeight: '22px',
          }}
        >
          {singleAd.description}
        </Typography>
        {!currentUser ? (
          <Button disabled variant="contained">
            Logga in för skicka en bokningsförfrågan
          </Button>
        ) : currentUser &&
          singleAd.bookingRequests?.some(
            (req: BookingRequest) => req.uid === currentUser.uid
          ) ? (
          <Button disabled variant="contained">
            Bokningsförfrågan har skickat
          </Button>
        ) : (
          <>
            <Button
              variant="contained"
              disabled={singleAd.authorId === currentUser.uid}
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              onClick={() => sendOffer(singleAd.id!)}
            >
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
