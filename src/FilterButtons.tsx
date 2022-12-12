import { Box, Typography } from '@mui/material';
import { useContext, useEffect, useMemo, useState } from 'react';
import { AdContext } from './Context/AdContextProvider';
import { NavigationContext } from './Context/NavigationContext';
import Feed from './Feed/Feed';
import './filterButtons.css';
import filterButtons from './filterButtonsData';
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

  const { filterNavigation, setFilterNavigation } =
    useContext(NavigationContext);

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
