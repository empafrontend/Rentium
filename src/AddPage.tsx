import { LocationOnOutlined } from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, CardMedia, Container, Typography } from '@mui/material';
import img from '../src/Assets/gk.png';
import StyledButton from './shared/StyledButton';

function AddPage() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 5,
        mt: '2rem',
      }}
    >
      <Box
        maxWidth={350}
        minWidth={300}
        margin="auto"
        sx={{ display: 'flex', flexDirection: 'column', rowGap: 1 }}
      >
        <CardMedia
          component="img"
          image={img}
          alt=""
          sx={{
            borderRadius: '1rem',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <AccessTimeIcon sx={{ fontSize: '1rem' }} /> {}
          <LocationOnOutlined sx={{ fontSize: '1rem' }} /> {}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            mt: '1rem',
          }}
        >
          <Typography variant="h5" sx={{ color: '#343232' }}>
            Galet snabb gräsklippare
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#2D3142',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {}kr
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ fontSize: '13px', margin: '1rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae
          lectus vulputate, rhoncus velit vitae, rhoncus sapien. Fusce finibus
          pharetra purus, venenatis sodales augue commodo et. Aliquam erat
          volutpat. Nam consectetur magna ut dui pulvinar accumsan. Phasellus
          condimentum dictum leo, id luctus risus hendrerit non. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus.
        </Typography>
        <StyledButton content="Skicka bokningsförfrågan" htmlType="submit" />
      </Box>
    </Container>
  );
}

export default AddPage;
