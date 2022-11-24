import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

interface Props {
  title: string;
  author: string;
  img: string;
  href?: string; // option for now as there is no product to link to
  price: number;
  isRequest?: boolean | false;
}

const AdCard = (props: Props) => (
  <Card sx={{ maxWidth: 300, borderRadius: '20px 20px 20px 0' }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Box width="50%" sx={{ py: 2, display: 'flex', placeContent: 'center' }}>
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
        }}
      >
        <Typography variant="body1" fontWeight={600}>
          {props.title}
        </Typography>
        <Typography pb={3} variant="body2" color="text.secondary">
          {props.author}
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
          sx={{ width: '50%', borderRadius: '20px 0 0 0' }}
        >
          Acceptera
        </Button>
        <Button
          variant="contained"
          sx={{
            width: '50%',
            borderRadius: 0,
            background: '#ECECEC',
            color: '#535353',
            '&:hover': {
              background: '#C6C4C4',
            },
          }}
        >
          Neka
        </Button>
      </CardActions>
    ) : (
      <CardActions disableSpacing sx={{ p: 0, width: '100%' }}>
        <Button
          variant="contained"
          sx={{ width: '100%', borderRadius: '20px 0 0 0' }}
        >
          Ta bort
        </Button>
      </CardActions>
    )}
  </Card>
);

export default AdCard;
