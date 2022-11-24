import { LocationOnOutlined } from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
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
        sx={{ display: 'flex', flexDirection: 'column', rowGap: 0.5 }}
      >
        <CardMedia
          component="img"
          image={img}
          alt=""
          sx={{
            borderRadius: '1rem',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: 0.5,
            }}
          >
            <AccessTimeIcon sx={{ fontSize: '15px' }} /> {}
            <LocationOnOutlined sx={{ fontSize: '15px' }} /> {}
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: '#6860CC',
              fontSize: '12px',
              display: 'flex',
              fontWeight: '400',
              alignItems: 'center',
            }}
          >
            <PersonOutlineIcon
              sx={{ fontSize: '1rem', m: '2px', color: '#6860CC' }}
            />
            lindqvistsara
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: '1rem',
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: '#343232', fontWeight: '500', fontSize: '20px' }}
          >
            Galet snabb gräsklippare
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#2D3142',
              fontSize: '12px',
              display: 'flex',
              fontWeight: '400',
              alignItems: 'center',
            }}
          >
            Uthyres: 22/5 - 2/6
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#2D3142',
              display: 'flex',
              fontSize: '16px',
              fontWeight: '400',
              alignItems: 'center',
              mt: '2px',
            }}
          >
            600 kr
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
