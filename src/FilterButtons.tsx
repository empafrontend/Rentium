import { PlaceOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdContext } from './Context/AdContextProvider';
import { NavigationContext } from './Context/NavigationContext';
import Feed from './Feed/Feed';
import './filterButtons.css';
import filterButtons from './filterButtonsData';
import { formatZeroPrice } from './helper';
import ContentContainer from './shared/ContentContainer';
import SlimCard from './SlimCard';

const FilterButtons = () => {
  const [count, setCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const { ads } = useContext(AdContext);

  const filterAds = () => {
    const filteredAds = ads.filter(
      (ad) =>
        ad.category.toLowerCase() === selectedCategory &&
        ad.isAvailable === true
    );
    return filteredAds;
  };

  const filteredList = useMemo(filterAds, [selectedCategory]);

  const { filterNavigation, setFilterNavigation, showFreeAds, setShowFreeAds } =
    useContext(NavigationContext);
  // console.log(showFreeAds);

  const freeItems = ads.filter((ad) => ad.price === 0);
  const freeStuff = freeItems.map((item, index) => (
    <Box
      key={index}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <Link to={`/ad/${item.id}`}>
        <Box sx={{ width: '30rem', display: 'flex', marginTop: '3rem' }}>
          <img
            src={item.img}
            alt={item.title}
            className="w-32 h-32 aspect-auto rounded-lg mx-8"
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '18rem',
              gap: '1rem',
            }}
          >
            <Box>
              <Typography variant="subtitle2">{item.title}</Typography>
              <Typography variant="body2" className="text-sm hind">
                {item.description.length > 150
                  ? item.description.substring(0, 150) + ' ...'
                  : item.description}
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                widht: '100%',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="caption" className="text-lg">
                {formatZeroPrice(item.price)}
              </Typography>

              <Typography variant="caption" className="text-sm text-blue-500">
                <PlaceOutlined sx={{ fontSize: '.8rem' }} /> {item.location}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  ));

  useEffect(() => {
    Filter();
  }, [selectedCategory]);

  const Filter = async () => {
    const checkbox = document.getElementById(
      selectedCategory
    ) as HTMLInputElement | null;

    if (checkbox?.checked) {
      setFilterNavigation(true);
    } else {
      setCount(0);
      setFilterNavigation(false);
      setSelectedCategory('');
    }
  };

  const filterButtonsList = filterButtons.map((filterButtons) => (
    <div
      key={filterButtons.id}
      className=" w-16 flex flex-col items-center justify-center"
    >
      <div>
        <div className="flex items-center justify-center rounded-full h-12 w-12 shadow-lg bg-white">
          <input
            className={`check opacity-0 absolute w-12 h-12 cursor-pointer`}
            type="checkbox"
            id={filterButtons.category}
            checked={selectedCategory === filterButtons.category}
            onChange={() => {
              setSelectedCategory(filterButtons.category);
              filterAds();
            }}
            onClick={() => Filter()}
          />
          <div className="h-7 w-7">
            <img src={filterButtons.img} alt="" className="aspect-auto " />
          </div>
        </div>
      </div>
    </div>
  ));

  const filterLength = `Antal produkter (${filteredList.length})`;
  const empty = ``;

  return (
    <Box>
      <div className=" flex flex-row w-full justify-center filter-buttons">
        {filterButtonsList}
      </div>
      {filterNavigation === true ? filterLength : empty}
      <div className="flex flex-col-reverse"></div>
      <ContentContainer>
        {filterNavigation === false ? (
          <Feed />
        ) : (
          filteredList.map((ad, index) => <SlimCard key={index} ad={ad!} />)
        )}
      </ContentContainer>
    </Box>
  );
};

export default FilterButtons;
