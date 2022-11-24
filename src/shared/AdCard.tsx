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

interface Props {
  title: string;
  author: string;
  img: string;
  href?: string; // TODO: This should not be optional (but it is currently missing from data)
  price: number;
  isRequest?: boolean | false;
}

const AdCard = (props: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isToRemove, setIsToRemove] = useState<boolean>(false);

  // Closes modal
  const handleClose = () => {
    setOpenModal(false);
    setIsToRemove(false);
  };

  // Displays warning for ad removal or offer rejection when clicking "neka" or "ta bort"
  const displayWarning = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpenModal(true);
    e.currentTarget.innerText === 'Ta bort'
      ? setIsToRemove(true)
      : setIsToRemove(false);
  };

  // Handles clicking "ja" in the warning
  const confirmAction = (title: string) => {
    setOpenModal(false);
    isToRemove ? removeAd(title) : rejectOffer(title);
  };

  const acceptOffer = (title: string) => {
    console.log('accepting offer', title);
    // TODO: Update item status in db
  };
  const removeAd = (title: string) => {
    console.log('deleting ad', title);
    // TODO: Delete item from db
  };

  const rejectOffer = (title: string) => {
    setIsToRemove(false);
    console.log('rejecting offer', title);
    // TODO: Remove ad from bokningsförfrågningarna
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 250,
          minWidth: 250,
          height: 'fit-content',
          borderRadius: '20px 20px 20px 0',
          boxShadow: '0 2px 10px #DDDBD5',
          mt: 1,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box
            width="50%"
            sx={{ py: 2, display: 'flex', placeContent: 'center' }}
          >
            <CardMedia
              component="img"
              alt={props.title}
              image={props.img}
              sx={{ borderRadius: 3, width: 100, height: 100 }}
            />
          </Box>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              placeContent: 'center',
              pl: 1,
            }}
          >
            <Typography variant="body1" fontWeight={600}>
              {props.title}
            </Typography>
            <Typography pb={3} variant="body2" color="text.secondary">
              {props.isRequest ? props.author : 'Inlagd 24-11-2022'}{' '}
              {/* TODO: insert date from data */}
            </Typography>
            <Typography variant="body1" fontWeight={400}>
              {props.price} kr
            </Typography>
          </CardContent>
        </Box>
        {props.isRequest ? (
          <CardActions disableSpacing sx={{ p: 0, width: '100%' }}>
            <Button
              variant="contained"
              onClick={() => acceptOffer(props.title)}
              sx={{ width: '50%', borderRadius: '20px 0 0 0' }}
            >
              Acceptera
            </Button>
            <Button
              variant="contained"
              onClick={(e) => displayWarning(e)}
              sx={{
                width: '50%',
                borderRadius: 0,
                background: '#ECECEC',
                color: '#535353',
                '&:hover': { background: '#C6C4C4' },
              }}
            >
              Neka
            </Button>
          </CardActions>
        ) : (
          <CardActions disableSpacing sx={{ p: 0, width: '100%' }}>
            <Button
              variant="contained"
              onClick={(e) => displayWarning(e)}
              sx={{ width: '100%', borderRadius: '20px 0 0 0' }}
            >
              Ta bort
            </Button>
          </CardActions>
        )}
      </Card>

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
              alt={props.title}
              image={props.img}
              sx={{ borderRadius: 3, width: 50, height: 50, m: 'auto' }}
            />
            <Typography variant="body2" pt={1}>
              {props.title} {props.price} kr
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              You action to {isToRemove ? 'remove the ad' : 'reject the offer'}{' '}
              cannot be reverted.
            </Typography>
          </Box>
          <CardActions disableSpacing sx={{ p: 0, width: '100%' }}>
            <Button
              variant="contained"
              onClick={() => confirmAction(props.title)}
              sx={{ width: '50%', borderRadius: '0 0 0 20px' }}
            >
              Ja
            </Button>
            <Button
              variant="contained"
              onClick={() => handleClose()}
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
    </>
  );
};

export default AdCard;
