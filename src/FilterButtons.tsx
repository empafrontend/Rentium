import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Feed from './Feed/Feed';
import CategoryLength from './categoryLength';
import './filterButtons.css';
import filterButtons from './filterButtonsData';
import ContentContainer from './shared/ContentContainer';
import SlimCard from './SlimCard';

const FilterButtons = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  useEffect(() => {
    Filter();
  }, [count]);

  const filterButtonsList = filterButtons.map((filterButtons) => (
    <div
      key={filterButtons.id}
      className=" w-16 flex flex-col items-center justify-center"
      onClick={() => setCount(filterButtons.id)}
    >
      <div>
        <div className="flex items-center justify-center rounded-full h-12 w-12 shadow-lg bg-white">
          <div className="h-7 w-7" onClick={() => setCount(filterButtons.id)}>
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
      for (let i = 0; i < shoes.length; i++) {
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
      <div className=" flex flex-row w-full justify-center filter-buttons">
        {filterButtonsList}
      </div>
      <div className="flex flex-col-reverse">
        <CategoryLength />
      </div>
      <ContentContainer>
        {count <= 0 ? <Feed /> : <SlimCard />}
      </ContentContainer>
    </Box>

  );
};
export default FilterButtons;
