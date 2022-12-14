import { PlaceOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Ad } from './Context/AdContextProvider';
import './Feed/feed.css';
import { formatZeroPrice, onImageError } from './helper';
import './index.css';

type SlimcardProps = Partial<Ad> & {
  ad: Ad;
};

const SlimCard = (props: SlimcardProps) => {
  return (
    <Link key={props.ad.id} to={`/ad/${props.ad.id}`}>
      <Box
        //id={`${props.ad.category}`}
        // className={`${props.ad.category} flex flex-row justify-center items-center mb-5 mt-5
        // `}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '3rem',
          gap: '1rem',
        }}
      >
        <img
          src={props.ad.img}
          alt={props.ad.title}
          onError={onImageError}
          className="w-32 h-32 aspect-auto object-cover rounded-lg"
          style={{ minWidth: 128 }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '90%',
            minWidth: { xs: 160, sm: 400, md: 460 },
            maxWidth: { xs: 280, sm: 400, md: 460 },
            gap: '1rem',
          }}
        >
          <Box>
            <Typography variant="subtitle2">{props.ad.title}</Typography>
            <Typography variant="body2" className="text-sm hind">
              {props.ad.description.length > 150
                ? props.ad.description.substring(0, 150) + ' ...'
                : props.ad.description}
            </Typography>
          </Box>

          <div className="flex flex-row justify-between">
            <Typography variant="caption" className="text-lg">
              {formatZeroPrice(props.ad.price)}
            </Typography>

            <Typography variant="caption" className="text-sm text-blue-500">
              <PlaceOutlined sx={{ fontSize: '.8rem' }} /> {props.ad.location}
            </Typography>
          </div>
        </Box>
      </Box>
    </Link>
  );
};

export default SlimCard;
