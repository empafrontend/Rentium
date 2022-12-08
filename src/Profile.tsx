import { LocationOnOutlined } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { BookingRequest, useAd } from './Context/AdContextProvider';
import { useUser } from './Context/UserContextProvider';
import { auth } from './firebase';

import './footer.css';
import { formatZeroPrice } from './helper';
import ContentContainer from './shared/ContentContainer';
import IsAvailableSwitch from './shared/IsAvailableSwitch';

function Profile() {
  const { currentUser } = useUser();
  const { ads, sendOffer, removeAd } = useAd();
  const params = useParams<{ id: string }>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const displayWarning = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const cancelAction = () => handleClose();
  const confirmAction = (id: string) => {
    removeAd(id);
    handleClose();
  };
  const user = () => ads.filter((ad) => ad.authorId === params.id);

  return (
    <ContentContainer background="#F5F5F5">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" component="h1" ml="1rem" py="2rem">
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
              minWidth: 340,
              height: 'fit-content',
              borderRadius: '20px 20px 20px 0',
              boxShadow: '0 2px 10px #DDDBD5',
              mb: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                p: '1rem',
              }}
            >
              <CardMedia
                component="img"
                image={ad.img}
                alt="img"
                sx={{
                  borderRadius: 3,
                  width: 125,
                  height: 125,
                }}
              />
              <CardContent
                sx={{
                  py: 0,
                  pr: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  height: 120,
                }}
              >
                <Typography variant="body1" fontWeight={600}>
                  {ad.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  minHeight={30}
                >
                  {ad.description.length > 60
                    ? ad.description.substring(0, 60) + ' ...'
                    : ad.description}
                </Typography>
                {currentUser && currentUser.uid === ad.authorId ? (
                  <IsAvailableSwitch ad={ad} />
                ) : null}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    pt:
                      currentUser && currentUser.uid === ad.authorId ? 3.5 : 6,
                  }}
                >
                  <Typography variant="body1" fontWeight={400}>
                    {formatZeroPrice(ad.price)}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ display: 'flex', gap: 0.3 }}
                  >
                    <LocationOnOutlined sx={{ fontSize: '.8rem' }} />
                    {ad.location}
                  </Typography>
                </Box>
                <Typography mt={-0.5} variant="body2" textAlign="right">
                  Inlagd:{' '}
                  {ad.createdAt
                    .toDate()
                    .toDateString()
                    .replace(/^\S+\s/, '')}{' '}
                </Typography>
              </CardContent>
            </Box>
            <Box sx={{ width: '100%', height: 35, mt: 1 }}>
              {!currentUser ? (
                <Button
                  disabled={!auth.currentUser}
                  variant="contained"
                  sx={{ width: '100%', borderRadius: '20px 0 0 0' }}
                >
                  Logga in för skicka en bokningsförfrågan
                </Button>
              ) : currentUser && currentUser.uid === ad.authorId ? (
                <Button
                  disabled={!ad.isAvailable}
                  variant="contained"
                  sx={{ width: '100%', borderRadius: '20px 0 0 0' }}
                  onClick={() => displayWarning()}
                >
                  {ad.isAvailable ? 'Ta bort' : 'Bokad eller otillgänglig'}
                </Button>
              ) : currentUser &&
                ad.bookingRequests?.some(
                  (req: BookingRequest) => req.uid === currentUser.uid
                ) ? (
                <Button
                  disabled
                  variant="contained"
                  sx={{ width: '100%', borderRadius: '20px 0 0 0' }}
                >
                  Bokningsförfrågan har skickat
                </Button>
              ) : (
                <>
                  <Button
                    sx={{ width: '100%', borderRadius: '20px 0 0 0' }}
                    variant="contained"
                    disabled={ad.authorId === currentUser.uid}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    onClick={() => sendOffer(ad.id!)}
                  >
                    Skicka bokningsförfrågan
                  </Button>
                  <ToastContainer />
                </>
              )}
            </Box>

            {/* Below is modal */}
            <Modal open={openModal} onClose={handleClose}>
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 300,
                  bgcolor: '#fff',
                  borderRadius: 5,
                  boxShadow: 24,
                }}
              >
                <Box sx={{ p: 4, textAlign: 'center' }}>
                  <Typography variant="h3" component="h2" pb={2}>
                    Är du säker?
                  </Typography>

                  <CardMedia
                    component="img"
                    alt={ad.title}
                    image={ad.img}
                    sx={{ borderRadius: 3, width: 50, height: 50, m: 'auto' }}
                  />
                  <Typography variant="body2" pt={1}>
                    {ad.title} {formatZeroPrice(ad.price)}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    Din åtgärd för att ta bort annonsen kan inte återställas.
                  </Typography>
                </Box>
                <CardActions disableSpacing sx={{ p: 0, width: '100%' }}>
                  <Button
                    variant="contained"
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    onClick={() => confirmAction(ad.id!)}
                    sx={{ width: '50%', borderRadius: '0 0 0 20px' }}
                  >
                    Ja
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => cancelAction()}
                    sx={{
                      width: '50%',
                      borderRadius: '0 0  20px 0',
                      background: '#ECECEC',
                      color: '#535353',
                      '&:hover': { background: '#C6C4C4' },
                    }}
                  >
                    Nej
                  </Button>
                </CardActions>
              </Box>
            </Modal>
          </Card>
        ))}
      </Box>
    </ContentContainer>
  );
}

export default Profile;
