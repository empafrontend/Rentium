import { useState } from 'react';
import './filterButtons.css';
import filterButtons from './filterButtonsData';

const FilterButtons = () => {
  const [count, setCount] = useState(0);
  const filterButtonsList = filterButtons.map((filterButtons) => (
    <div
      key={filterButtons.id}
      className="w-20 flex flex-col items-center justify-center"
      onClick={() => setCount(filterButtons.id)}
    >
      <div>
        <div className="flex items-center justify-center rounded-full h-14 w-14 shadow-lg bg-white">
          <div className="h-8 w-8">
            <img src={filterButtons.img} alt="" className="aspect-auto " />
          </div>
        </div>
        <h5 className="text-center my-4">{filterButtons.text}</h5>
      </div>
    </div>
  ));
  const Filter = () => {
    const shoes = document.querySelectorAll('div.shoes');
    const hats = document.querySelectorAll('div.hats');
    const tools = document.querySelectorAll('div.tools');
    const housing = document.querySelectorAll('div.housing');
    const vehicles = document.querySelectorAll('div.vehicles');
    const categorysArray = [shoes, hats, tools, housing, vehicles];
    for (let i = 0; i < categorysArray.length; i++) {
      shoes[i]?.classList.add('hidden');
      hats[i]?.classList.add('hidden');
      tools[i]?.classList.add('hidden');
      housing[i]?.classList.add('hidden');
      vehicles[i]?.classList.add('hidden');
    }

    if (count === 1) {
      for (let i = 0; i < shoes.length; i++) {
        shoes[i]?.classList.add('flex');
        shoes[i]?.classList.remove('hidden');
      }
    } else if (count === 2) {
      for (let i = 0; i < hats.length; i++) {
        hats[i]?.classList.add('flex');
        hats[i]?.classList.remove('hidden');
      }
    } else if (count === 3) {
      for (let i = 0; i < tools.length; i++) {
        tools[i]?.classList.add('flex');
        tools[i]?.classList.remove('hidden');
      }
    } else if (count === 4) {
      for (let i = 0; i < shoes.length; i++) {
        housing[i]?.classList.add('flex');
        housing[i]?.classList.remove('hidden');
      }
    } else if (count === 5) {
      for (let i = 0; i < vehicles.length; i++) {
        vehicles[i]?.classList.add('flex');
        vehicles[i]?.classList.remove('hidden');
      }
    }
  };
  Filter();
  return (
    <div className="flex flex-row w-full justify-center filter-buttons">
      {filterButtonsList}
    </div>
  );
};
export default FilterButtons;
