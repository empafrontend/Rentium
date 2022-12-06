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
import { Ad, useAd } from '../Context/AdContextProvider';
import IsAvailableSwitch from './IsAvailableSwitch';

type ExAdCard = Partial<Ad> & {
  ad: Ad;
  isRequest?: boolean | false;
};

const AdCard = (props: ExAdCard) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isToRemove, setIsToRemove] = useState<boolean>(false);
  const { acceptOffer, rejectOffer, removeAd } = useAd();

  /** Closes modal  */
  const handleClose = () => setOpenModal(false);

  /** Displays warning for ad removal or offer rejection when clicking "neka" or "ta bort" */
  const displayWarning = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpenModal(true);
    e.currentTarget.innerText === 'Ta bort'
      ? setIsToRemove(true)
      : setIsToRemove(false);
  };

  /** Handles clicking "ja" in the warning */
  const confirmAction = (id: string) => {
    setOpenModal(false);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    isToRemove ? removeAd(id) : rejectOffer(props.ad.id!, props.ad.requestor!);
  };

  /**  Handles clicking "nej" in the warning */
  const cancelAction = () => {
    handleClose();
    setIsToRemove(false);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 250,
          minWidth: 250,
          maxHeight: 200,
          borderRadius: '20px 20px 20px 0',
          boxShadow: '0 2px 10px #DDDBD5',
          mt: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box
            width="50%"
            sx={{
              pt: 2,
              display: 'flex',
              placeContent: !props.isRequest ? 'center' : 'start',
              flexDirection: 'column',
              placeItems: 'center',
            }}
          >
            <CardMedia
              component="img"
              alt={props.ad.title}
              image={props.ad.img}
              sx={{ borderRadius: 3, width: 100, height: 100 }}
            />
            {props.isRequest ? <></> : <IsAvailableSwitch ad={props.ad} />}
          </Box>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              placeContent: 'center',
              pl: 1,
              maxWidth: 120,
            }}
          >
            <Typography variant="body1" fontWeight={600}>
              {props.ad.title}
            </Typography>
            <Typography pb={3} variant="body2" color="text.secondary">
              {props.isRequest
                ? props.ad.requestor
                : 'Inlagd: ' +
                  props.ad.createdAt
                    .toDate()
                    .toDateString()
                    .replace(/^\S+\s/, '')}
            </Typography>

            <Typography variant="body1" fontWeight={400}>
              {props.ad.price} kr
            </Typography>
          </CardContent>
        </Box>
        {props.isRequest ? (
          <CardActions disableSpacing sx={{ p: 0, width: '100%' }}>
            <Button
              variant="contained"
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              onClick={() => acceptOffer(props.ad.id!, props.ad.requestor!)}
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
              sx={{
                width: '100%',
                borderRadius: '20px 0 0 0',
                whiteSpace: 'nowrap',
              }}
              disabled={!props.ad.isAvailable}
            >
              {props.ad.isAvailable ? 'Ta bort' : 'Bokad eller otillgänglig'}
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
              alt={props.ad.title}
              image={props.ad.img}
              sx={{ borderRadius: 3, width: 50, height: 50, m: 'auto' }}
            />
            <Typography variant="body2" pt={1}>
              {props.ad.title} {props.ad.price} kr
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              You action to {isToRemove ? 'remove the ad' : 'reject the offer'}{' '}
              cannot be reverted.
            </Typography>
          </Box>
          <CardActions disableSpacing sx={{ p: 0, width: '100%' }}>
            <Button
              variant="contained"
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              onClick={() => confirmAction(props.ad.id!)}
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
    </>
  );
};

export default AdCard;
