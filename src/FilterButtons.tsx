import { Box, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { NavigationContext } from './Context/NavigationContext';
import Feed from './Feed/Feed';
import './filterButtons.css';
import filterButtons from './filterButtonsData';
import ContentContainer from './shared/ContentContainer';
import SlimCard from './SlimCard';

const FilterButtons = () => {
  const [count, setCount] = useState(0);
  const { filterNavigation, setFilterNavigation } =
    useContext(NavigationContext);

  useEffect(() => {
    Filter();
  }, [count]);

  const handleView = (filterButtons: number) => {
    setCount(filterButtons);
    setFilterNavigation(true);
  };

  const filterButtonsList = filterButtons.map((filterButtons, index) => (
    <div
      key={filterButtons.id}
      className="button-container"
      /* onClick={() => setCount(filterButtons.id)} */
      /* flex items-center justify-center */
    >
      <div className="rounded-full hover:cursor-pointer">
        <div onClick={() => handleView(filterButtons.id)}>
          <button
            onClick={() => handleView(filterButtons.id)}
            id="button"
            className="filter-button flex items-center justify-center rounded-full h-12 w-12 shadow-lg bg-white hover:ring-4 hover:outline-none hover:ring-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-900"
          >
            <div className="h-7 w-7">
              <img src={filterButtons.img} alt="" className="aspect-auto " />
            </div>
          </button>
          <Typography
            variant="body1"
            sx={{
              marginLeft: '1.2rem',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '.4rem',
            }}
          >
            {filterButtons.text}
          </Typography>
        </div>
      </div>
    </div>
  ));

  const Filter = () => {
    const shoes = document.querySelectorAll('div.shoes');
    const hats = document.querySelectorAll('div.hats');
    const tools = document.querySelectorAll('div.tools');
    const housing = document.querySelectorAll('div.housing');
    const vehicles = document.querySelectorAll('div.vehicles');
    const category = document.getElementById('numberOfArticles');
    category?.classList.add('flex');
    category?.classList.remove('hidden');
    const categorysArray = [shoes, hats, tools, housing, vehicles];
    for (let i = 0; i < categorysArray.length; i++) {
      shoes[i]?.classList.add('hidden');
      hats[i]?.classList.add('hidden');
      tools[i]?.classList.add('hidden');
      housing[i]?.classList.add('hidden');
      vehicles[i]?.classList.add('hidden');
      shoes[i]?.classList.remove('showing');
      hats[i]?.classList.remove('showing');
      tools[i]?.classList.remove('showing');
      housing[i]?.classList.remove('showing');
      vehicles[i]?.classList.remove('showing');
    }

    if (count === 1) {
      for (let i = 0; i < shoes.length; i++) {
        shoes[i]?.classList.add('flex');
        shoes[i]?.classList.add('showing');
        shoes[i]?.classList.remove('hidden');
      }
    } else if (count === 2) {
      for (let i = 0; i < hats.length; i++) {
        hats[i]?.classList.add('flex');
        hats[i]?.classList.add('showing');
        hats[i]?.classList.remove('hidden');
      }
    } else if (count === 3) {
      for (let i = 0; i < tools.length; i++) {
        tools[i]?.classList.add('flex');
        tools[i]?.classList.add('showing');
        tools[i]?.classList.remove('hidden');
      }
    } else if (count === 4) {
      for (let i = 0; i < housing.length; i++) {
        housing[i]?.classList.add('flex');
        housing[i]?.classList.add('showing');
        housing[i]?.classList.remove('hidden');
      }
    } else if (count === 5) {
      for (let i = 0; i < vehicles.length; i++) {
        vehicles[i]?.classList.add('flex');
        vehicles[i]?.classList.add('showing');
        vehicles[i]?.classList.remove('hidden');
      }
    }
  };

  return (
    <Box>
      {filterNavigation ? (
        <div className=" button-div flex flex-row filter-buttons">
          {filterButtonsList}
        </div>
      ) : (
        <div className=" button-div flex flex-row filter-buttons-down">
          {filterButtonsList}
        </div>
      )}

      {/*   <div className="flex flex-col-reverse">
        <CategoryLength />
      </div> */}
      <ContentContainer>
        {filterNavigation === false ? <Feed /> : <SlimCard />}
      </ContentContainer>
    </Box>
  );
};

export default FilterButtons;
