import { Box, Typography } from '@mui/material';
import { useContext, useMemo, useState } from 'react';
import { AdContext } from './Context/AdContextProvider';
import { NavigationContext } from './Context/NavigationContext';
import Feed from './Feed/Feed';
import './filterButtons.css';
import filterButtons from './filterButtonsData';
import ContentContainer from './shared/ContentContainer';
import SlimCard from './SlimCard';

const FilterButtons = () => {
  const [count, setCount] = useState(0);
  // const { ads, getAds } = useContext(AdContext);
  // useEffect(() => {}, []);

  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const { ads } = useContext(AdContext);

  const filterAds = () => {
    return ads.filter((ad) => ad.category === selectedCategory);
  };

  const filteredList = useMemo(filterAds, [selectedCategory]);

  const { filterNavigation, setFilterNavigation } =
    useContext(NavigationContext);
  // console.log(count);
  // console.log(filterNavigation);

  // useEffect(() => {
  //   Filter();
  // }, [selectedCategory]);

  // const handleView = async (filterButtons: number) => {
  // };

  console.log(filterAds());
  const Filter = async () => {
    const checkbox = document.getElementById(
      selectedCategory
    ) as HTMLInputElement | null;

    if (checkbox?.checked) {
      setFilterNavigation(true);
      console.log('filtered');
      console.log(selectedCategory);
      console.log(filteredList);
    } else {
      setCount(0);
      setFilterNavigation(false);
      setSelectedCategory('');
      console.log('not filtered');
    }

    // if (count === 1) {
    //   setSelectedCategory('shoes');
    // } else if (count === 2) {
    //   setSelectedCategory('hats');
    // } else if (count === 3) {
    //   setSelectedCategory('tools');
    // } else if (count === 4) {
    //   setSelectedCategory('housing');
    // } else if (count === 5) {
    //   setSelectedCategory('vehicles');
    // } else if (count === 0) {
    //   setSelectedCategory('');
    //   // checkbox?.checked === false;
    // }
  };

  // console.log(selectedCategory);
  // console.log(count);
  console.log(selectedCategory);

  // const getFilteredList = async () => {
  //   if (filterNavigation === true) {
  //     const visibleComponents = document.querySelectorAll(
  //       `#${selectedCategory}`
  //     );
  //     for (let i = 0; i < visibleComponents.length; i++) {
  //       visibleComponents[i].classList.remove('hidden');
  //       visibleComponents[i].classList.add('flex');
  //     }
  //   }
  // };

  const filterButtonsList = filterButtons.map((filterButtons) => (
    <div
      key={filterButtons.id}
      className=" w-16 flex flex-col items-center justify-center"
    >
      <div>
        <div className="flex items-center justify-center rounded-full h-12 w-12 shadow-lg bg-white">
          <input
            className="absolute w-12 h-12"
            type="checkbox"
            id={filterButtons.category}
            onChange={() => {
              setSelectedCategory(filterButtons.category);
              filterAds();
            }}
            onClick={() => Filter()}
            // onChange={() => Filter()}
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

  return (
    <Box>
      <div className=" flex flex-row w-full justify-center filter-buttons">
        {filterButtonsList}
      </div>
      <div className="flex flex-col-reverse"></div>
      {filteredList.map((element, index) => (
        <SlimCard {...element} key={index} />
      ))}
      <Feed />
      <ContentContainer>
        {/* {filterNavigation === false ? <Feed /> : <SlimCard />} */}
      </ContentContainer>
    </Box>
  );
};
export default FilterButtons;
