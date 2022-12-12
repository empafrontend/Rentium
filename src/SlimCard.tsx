import { PlaceOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { Ad, useAd } from './Context/AdContextProvider';
import './Feed/feed.css';
import './index.css';

type SlimcardProps = Partial<Ad> & {
  ad: Ad;
};

const SlimCard = (props: SlimcardProps) => {
  const { ads } = useAd();
  console.log(ads);
  return (
    <Link key={props.ad.id} to={`/ad/${props.ad.id}`}>
      <div
        id={`${props.ad.category}`}
        className={`${props.ad.category} flex flex-row justify-center items-center mb-1 p-1 mt-1`}
      >
        <img
          src={props.ad.img}
          alt={props.ad.title}
          className="w-32 h-32 aspect-auto rounded-lg mx-8"
        />
        <div className="flex flex-col w-2/5">
          <div className="mb-4">
            <Typography variant="subtitle2">{props.ad.title}</Typography>
            <Typography variant="body2" className="text-sm hind">
              {props.ad.description}
            </Typography>
          </div>

          <div className="flex flex-row justify-between mr-8">
            <Typography variant="caption" className="text-lg">
              {props.ad.price} kr
            </Typography>

            <Typography variant="caption" className="text-sm text-blue-500">
              <PlaceOutlined sx={{ fontSize: '.8rem' }} /> {props.ad.location}
            </Typography>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SlimCard;
