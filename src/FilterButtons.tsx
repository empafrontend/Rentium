import { useState } from 'react';
import CategoryLength from './categoryLength';
import './filterButtons.css';
import filterButtons from './filterButtonsData';

const FilterButtons = () => {
  const [count, setCount] = useState(0);
  const filterButtonsList = filterButtons.map((filterButtons) => (
    <div
      key={filterButtons.id}
      className="w-full flex flex-col justify-center items-center"
    >
      <div>
        <div
          className="rounded-full h-auto w-auto shadow-lg p-8 cursor-pointer"
          onClick={() => setCount(filterButtons.id)}
        >
          <img src={filterButtons.img} alt="" className="w-16 aspect-auto" />
        </div>
        <h5 className="text-center my-4">{filterButtons.text}</h5>
      </div>
    </div>
  ));
  const Filter = () => {
    const feed = document.querySelector('#FeedCard');
    feed?.classList.remove('css-1oqqzyl-MuiContainer-root');
    feed?.classList.add('hidden');
    const shoes = document.querySelectorAll('div.shoes');
    const hats = document.querySelectorAll('div.hats');
    const tools = document.querySelectorAll('div.tools');
    const housing = document.querySelectorAll('div.housing');
    const vehicles = document.querySelectorAll('div.vehicles');
    const numberOfArticles = document.getElementById('numberOfArticles');
    const categorysArray = [shoes, hats, tools, housing, vehicles];
    numberOfArticles?.classList.add('flex');
    numberOfArticles?.classList.remove('hidden');
    for (let i = 0; i < categorysArray.length; i++) {
      shoes[i]?.classList.add('hidden');
      shoes[i]?.classList.remove('showing');
      hats[i]?.classList.add('hidden');
      hats[i]?.classList.remove('showing');
      tools[i]?.classList.add('hidden');
      tools[i]?.classList.remove('showing');
      housing[i]?.classList.add('hidden');
      housing[i]?.classList.remove('showing');
      vehicles[i]?.classList.add('hidden');
      vehicles[i]?.classList.remove('showing');
    }
    if (count === 1) {
      for (let i = 0; i < shoes.length; i++) {
        shoes[i]?.classList.add('flex', 'showing');
        shoes[i]?.classList.remove('hidden');
      }
    } else if (count === 2) {
      for (let i = 0; i < hats.length; i++) {
        hats[i]?.classList.add('flex', 'showing');
        hats[i]?.classList.remove('hidden');
      }
    } else if (count === 3) {
      for (let i = 0; i < tools.length; i++) {
        tools[i]?.classList.add('flex', 'showing');
        tools[i]?.classList.remove('hidden');
      }
    } else if (count === 4) {
      for (let i = 0; i < shoes.length; i++) {
        housing[i]?.classList.add('flex', 'showing');
        housing[i]?.classList.remove('hidden');
      }
    } else if (count === 5) {
      for (let i = 0; i < vehicles.length; i++) {
        vehicles[i]?.classList.add('flex', 'showing');
        vehicles[i]?.classList.remove('hidden');
      }
    }
  };
  Filter();
  return (
    <div className=" flex flex-row w-full justify-center filter-buttons">
      {filterButtonsList}
      <div>
        <CategoryLength />
      </div>
    </div>
  );
};
export default FilterButtons;
