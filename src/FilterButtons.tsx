import { PlaceOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import free from './Assets/free-tag.png';
import { useAd } from './Context/AdContextProvider';
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
  const { ads } = useAd();

  const filterAds = () => {
    const filteredAds = ads.filter(
      (ad) =>
        ad.category.toLowerCase() === selectedCategory &&
        ad.isAvailable === true
    );
    return filteredAds;
  };

  const filteredList = useMemo(filterAds, [selectedCategory]);
  const {
    isFilteredView,
    setIsFilteredView,
    setIsLandingPage,
    isLandingPage,
    showFreeAds,
    setShowFreeAds,
  } = useContext(NavigationContext);

  const freeItems = ads.filter(
    (ad) => ad.price === 0 && ad.isAvailable === true
  );
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
        <Box
          sx={{
            width: '90%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '3rem',
            gap: '1.5rem',
          }}
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-32 h-32 aspect-auto object-cover rounded-lg"
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '60%',
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
    if (isFilteredView) {
      setIsLandingPage(false);
    }
    Filter();
  }, [selectedCategory, count]);

  const borderButton = document.querySelectorAll('.borderButton');
  if (showFreeAds === true || isLandingPage === true) {
    for (let i = 0; i < borderButton.length; i++) {
      borderButton[i].classList.remove('activeButton');
    }
  }
  const Filter = async () => {
    const checkbox = document.getElementById(
      selectedCategory
    ) as HTMLInputElement | null;
    if (checkbox?.checked) {
      setIsFilteredView(true);
      setIsLandingPage(false);
      setShowFreeAds(false);
    } else {
      setCount(0);
      setIsLandingPage(true);
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

  const filterButtonsList = filterButtons.map((filterButtons) => (
    <div
      key={filterButtons.id}
      className="w-16 flex flex-col items-center justify-center"
    >
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
          <img
            src={filterButtons.img}
            alt={filterButtons.text}
            className="aspect-auto "
          />
        </div>
      </button>
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

  const filterLength = `Antal produkter  (${filteredList.length})`;
  const empty = ``;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      {isLandingPage ? (
        <div className=" button-div flex flex-row filter-buttons-down">
          {filterButtonsList}

          <button
            id="free-tag"
            className="mb-4 rounded-full hover:animate-spin rounded-full focus:border-dashed focus:border-2 focus:border-orange-300"
            onClick={() => setShowFreeAds(true)}
          >
            <div className="h-12 w-12" onClick={() => setIsLandingPage(false)}>
              <img src={free} alt="Gratis" className="aspect-auto p-1 " />
            </div>
          </button>
        </div>
      ) : (
        <div className=" button-div flex flex-row filter-buttons">
          {filterButtonsList}

          <button
            id="free-tag"
            className="mb-4 rounded-full hover:animate-spin rounded-full focus:border-dashed focus:border-2 focus:border-orange-300"
            onClick={() => setShowFreeAds(true)}
          >
            <div className="h-12 w-12" onClick={() => setIsLandingPage(false)}>
              <img src={free} alt="Gratis" className="aspect-auto p-1 " />
            </div>
          </button>
        </div>
      )}

      <ContentContainer>
        <Box sx={{ marginTop: '2rem' }}></Box>
        {showFreeAds === true ? (
          <>
            <Typography variant="body2" mt={2} mb={1} textAlign="center">
              Antal produkter ({freeStuff.length})
            </Typography>

            <Box sx={{ width: '100%' }}>{freeStuff}</Box>
          </>
        ) : isLandingPage === true ? (
          <Feed />
        ) : (
          <>
            <Typography variant="body2" mt={5} mb={2} textAlign="center">
              {isFilteredView === true ? filterLength : empty}
            </Typography>
            {filteredList.map((ad, index) => (
              <SlimCard key={index} ad={ad} />
            ))}
          </>
        )}
      </ContentContainer>
    </Box>
  );
};
export default FilterButtons;
