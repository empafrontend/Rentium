import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import { useContext } from 'react';
import img from '../src/Assets/gk.png';
import { AdContext } from './Context/AdContextProvider';
import { useUser } from './Context/UserContextProvider';
import ContentContainer from './shared/ContentContainer';

const AdPage = () => {
  const { ads } = useContext(AdContext);
  const { user, handleSignOut } = useUser();

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
              Inlagd: 16 Maj. 22:46
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
              Göteborg
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
            <PersonOutlineIcon
              sx={{ fontSize: '1rem', m: '2px', color: '#343232' }}
            />
            lindqvistsara
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
            Galet snabb gräsklippare
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
              22 maj 2022 - 6 juli 2022
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
        <Button variant="contained">Skicka bokningsförfrågan</Button>
      </Box>
    </ContentContainer>
  );
};

export default AdPage;
