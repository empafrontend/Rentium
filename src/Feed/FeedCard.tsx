import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Container } from '@mui/system';
import productImg from '../Assets/produktbild.jpg';
import './feed.css';

function FeedCard() {
  return (
    <Container>
      <Typography
        variant="h5"
        sx={{
          padding: '1rem',
        }}
      >
        Nya annonser
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Card
          className="card"
          sx={{
            width: '11rem',
            height: '14rem',
            borderRadius: '1rem',
          }}
        >
          <CardMedia
            component="img"
            image={productImg}
            alt="Produktbild"
            sx={{ borderRadius: '1rem', width: '100%', height: '9rem' }}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2">
              Rubrik
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="caption" sx={{ color: 'grey' }}>
                <LocationOnOutlinedIcon sx={{ fontSize: '1rem' }} /> Göteborg
              </Typography>
              <Typography variant="caption">Pris: 300kr</Typography>
            </Box>
          </CardContent>
        </Card>
        <Card
          className="card"
          sx={{
            width: '11rem',
            height: '14rem',
            borderRadius: '1rem',
          }}
        >
          <CardMedia
            component="img"
            image={productImg}
            alt="Produktbild"
            sx={{ borderRadius: '1rem', width: '100%', height: '9rem' }}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2">
              Rubrik
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="caption" sx={{ color: 'grey' }}>
                <LocationOnOutlinedIcon sx={{ fontSize: '1rem' }} /> Göteborg
              </Typography>
              <Typography variant="caption">Pris: 300kr</Typography>
            </Box>
          </CardContent>
        </Card>
        <Card
          className="card"
          sx={{
            width: '11rem',
            height: '14rem',
            borderRadius: '1rem',
          }}
        >
          <CardMedia
            component="img"
            image={productImg}
            alt="Produktbild"
            sx={{ borderRadius: '1rem', width: '100%', height: '9rem' }}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2">
              Rubrik
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="caption" sx={{ color: 'grey' }}>
                <LocationOnOutlinedIcon sx={{ fontSize: '1rem' }} /> Göteborg
              </Typography>
              <Typography variant="caption">Pris: 300kr</Typography>
            </Box>
          </CardContent>
        </Card>
        <Card
          className="card"
          sx={{
            width: '11rem',
            height: '14rem',
            borderRadius: '1rem',
          }}
        >
          <CardMedia
            component="img"
            image={productImg}
            alt="Produktbild"
            sx={{ borderRadius: '1rem', width: '100%', height: '9rem' }}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2">
              Rubrik
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="caption" sx={{ color: 'grey' }}>
                <LocationOnOutlinedIcon sx={{ fontSize: '1rem' }} /> Göteborg
              </Typography>
              <Typography variant="caption">Pris: 300kr</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default FeedCard;
