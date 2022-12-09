import { PlaceOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CategoryLength from './categoryLength';
import { useAd } from './Context/AdContextProvider';
import './Feed/feed.css';
import { formatZeroPrice } from './helper';
import './index.css';
import ContentContainer from './shared/ContentContainer';

const SlimCard = () => {
  const { ads } = useAd();

  return (
    <ContentContainer>
      <CategoryLength />
      {ads.map((ads, index) => (
        <Link key={index} to={`/ad/${ads.id}`}>
          <div
            className={`${ads.category} hidden flex flex-row justify-center items-center mb-1 p-1 mt-1`}
          >
            <img
              src={ads.img}
              alt={ads.title}
              className="w-32 h-32 aspect-auto rounded-lg mx-8"
            />
            <div className="flex flex-col w-2/5">
              <div className="mb-4">
                <Typography variant="subtitle2">{ads.title}</Typography>
                <Typography variant="body2" className="text-sm hind">
                  {ads.description}
                </Typography>
              </div>

              <div className="flex flex-row justify-between mr-8">
                <Typography variant="caption" className="text-lg">
                  {formatZeroPrice(ads.price)}
                </Typography>

                <Typography variant="caption" className="text-sm text-blue-500">
                  <PlaceOutlined sx={{ fontSize: '.8rem' }} /> {ads.location}
                </Typography>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </ContentContainer>
  );
};

export default SlimCard;
