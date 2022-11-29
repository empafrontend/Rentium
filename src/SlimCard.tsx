import { Place } from '@mui/icons-material';
import { Container } from '@mui/material';
import ads from './adsData';
import './index.css';

const SlimCard = () => {
  const adsList = ads.map((ads) => (
    <div
      className={`${ads.category} hidden flex-row items-center mb-8 p-8 shadow-lg`}
    >
      <img src={ads.img} alt="" className="w-32 aspect-auto rounded-lg mx-8" />
      <div className="flex flex-col">
        <div className="mb-4">
          <h2>{ads.title}</h2>
          <p className="text-sm hind">{ads.description}</p>
        </div>

        <div className="flex flex-row justify-between">
          <p className="text-lg">{ads.price}</p>

          <p className="text-sm text-blue-500">
            <Place /> {ads.location}
          </p>
        </div>
      </div>
    </div>
  ));

  return <Container maxWidth="sm">{adsList}</Container>;
};

export default SlimCard;
