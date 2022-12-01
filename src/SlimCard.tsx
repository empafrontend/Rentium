import { PlaceOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import CategoryLength from './categoryLength';
import { AdContext } from './Context/AdContextProvider';
import './Feed/feed.css';
import './index.css';
import ContentContainer from './shared/ContentContainer';

const SlimCard = () => {
  const { ads } = useContext(AdContext);
  const adsList = ads.map((ads, index) => (
    <div
      key={index}
      className={`${ads.category} hidden flex flex-row justify-center items-center mb-1 p-1 mt-1`}
    >
      <img
        src={ads.img}
        alt=""
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
            {ads.price} kr
          </Typography>

          <Typography variant="caption" className="text-sm text-blue-500">
            <PlaceOutlined sx={{ fontSize: '.8rem' }} /> {ads.location}
          </Typography>
        </div>
      </div>
    </div>
  ));

  return (
    <ContentContainer>
      <Box>
        <CategoryLength />
        {adsList}
      </Box>
    </ContentContainer>
  );
};

export default SlimCard;
