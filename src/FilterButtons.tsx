import { PlaceOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import free from './Assets/free-tag.png';
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
            className="w-32 h-32 aspect-auto object-cover rounded-lg mx-8"
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
  }, [selectedCategory, count]);

  const borderButton = document.querySelectorAll('.borderButton');
  if (showFreeAds === true) {
    for (let i = 0; i < borderButton.length; i++) {
      borderButton[i].classList.remove('activeButton');
    }
  }
  const Filter = async () => {
    const checkbox = document.getElementById(
      selectedCategory
    ) as HTMLInputElement | null;
    if (checkbox?.checked) {
      setFilterNavigation(true);
      setShowFreeAds(false);
    } else {
      setCount(0);
      setFilterNavigation(false);
      setSelectedCategory('');
    }

    if (selectedCategory === 'shoes') {
      for (let i = 0; i < borderButton.length; i++) {
        borderButton[i].classList.remove('activeButton');
      }
      borderButton[0].classList.add('activeButton');
    } else if (selectedCategory === 'hats') {
      for (let i = 0; i < borderButton.length; i++) {
        borderButton[i].classList.remove('activeButton');
      }
      borderButton[1].classList.add('activeButton');
    } else if (selectedCategory === 'tools') {
      for (let i = 0; i < borderButton.length; i++) {
        borderButton[i].classList.remove('activeButton');
      }
      borderButton[2].classList.add('activeButton');
    } else if (selectedCategory === 'clothes') {
      for (let i = 0; i < borderButton.length; i++) {
        borderButton[i].classList.remove('activeButton');
      }
      borderButton[3].classList.add('activeButton');
    } else if (selectedCategory === 'vehicle') {
      for (let i = 0; i < borderButton.length; i++) {
        borderButton[i].classList.remove('activeButton');
      }
      borderButton[4].classList.add('activeButton');
    }
  };
  console.log(selectedCategory);

  const filterButtonsList = filterButtons.map((filterButtons) => (
    <div
      key={filterButtons.id}
      className="w-16 flex flex-col items-center justify-center"
    >
      <div>
        <button className="borderButton flex items-center justify-center rounded-full h-12 w-12 shadow-lg bg-white">
          <input
            className={` z-0 check opacity-0 absolute w-12 h-12 cursor-pointer`}
            type="checkbox"
            id={filterButtons.category}
            checked={selectedCategory === filterButtons.category}
            onChange={() => {
              setSelectedCategory(filterButtons.category);
              filterAds();
            }}
            onClick={() => {
              Filter();
              setCount(filterButtons.id);
            }}
          />
          <div className="h-7 w-7">
            <img src={filterButtons.img} alt="" className="aspect-auto " />
          </div>
        </button>
      </div>
      <Typography
        variant="body1"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '.4rem',
        }}
      >
        {filterButtons.text}
      </Typography>
    </div>
  ));

  const filterLength = `Antal produkter (${filteredList.length})`;
  const empty = ``;

  return (
    <Box>
      {filterNavigation ? (
        <div className=" button-div flex flex-row filter-buttons">
          {filterButtonsList}

          <button
            id="free-tag"
            className="h-14 w-14 mb-6 flex justify-center hover:animate-spin rounded-full focus:border-dashed focus:border-2 focus:border-orange-300"
            onClick={() => setShowFreeAds(true)}
          >
            <img src={free} alt="" className="aspect-auto p-1" />
          </button>
        </div>
      ) : (
        <div className=" button-div flex flex-row filter-buttons-down">
          {filterButtonsList}

          <button
            id="free-tag"
            className="h-14 w-14 mb-6 flex justify-center hover:animate-spin rounded-full focus:border-dashed focus:border-2 focus:border-orange-300"
            onClick={() => setShowFreeAds(true)}
          >
            <img src={free} alt="" className="aspect-auto p-1" />
          </button>
        </div>
      )}
      <div className="flex flex-col-reverse"></div>
      <ContentContainer>
        {filterNavigation === true ? filterLength : empty}
        {showFreeAds === true ? (
          <>
            <ContentContainer>
              {/* <CategoryLength /> */}
              <Box sx={{ width: '100%' }}>{freeStuff}</Box>
            </ContentContainer>
          </>
        ) : filterNavigation === false ? (
          <Feed />
        ) : (
          filteredList.map((ad, index) => <SlimCard key={index} ad={ad!} />)
        )}
      </ContentContainer>
    </Box>
  );
};
export default FilterButtons;
