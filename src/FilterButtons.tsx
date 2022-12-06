import { Box, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { useAd } from './Context/AdContextProvider';
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

  const { ads } = useAd();
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const { filterNavigation, setFilterNavigation } =
    useContext(NavigationContext);
  // console.log(count);
  // console.log(filterNavigation);

  // useEffect(() => {
  //   Filter();
  // }, [count]);

  const handleView = async (filterButtons: number) => {
    setCount(filterButtons);
    setFilterNavigation(true);

    if (filterButtons === 1) {
      setSelectedCategory('shoes');
    } else if (filterButtons === 2) {
      setSelectedCategory('hats');
    } else if (filterButtons === 3) {
      setSelectedCategory('tools');
    } else if (filterButtons === 4) {
      setSelectedCategory('housing');
    } else if (filterButtons === 5) {
      setSelectedCategory('vehicles');
    }
  };

  // const setFilterList = async () => {
  //   console.log('A');
  // };

  // console.log(selectedCategory);
  console.log(count);
  console.log(selectedCategory);

  const getFilteredList = async () => {
    const visibleComponents = document.querySelectorAll(
      `div.` + selectedCategory
    );
    for (let i = 0; i < visibleComponents.length; i++) {
      visibleComponents[i].classList.remove('hidden');
      visibleComponents[i].classList.add('flex');
    }
  };

  const filterButtonsList = filterButtons.map((filterButtons) => (
    <div
      key={filterButtons.id}
      className=" w-16 flex flex-col items-center justify-center"
      onClick={() => setCount(filterButtons.id)}
    >
      <div>
        <div className="flex items-center justify-center rounded-full h-12 w-12 shadow-lg bg-white">
          <div
            className="h-7 w-7"
            onClick={() => {
              handleView(filterButtons.id);
              getFilteredList();
            }}
          >
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
      <ContentContainer>
        {filterNavigation === false ? <Feed /> : <SlimCard />}
      </ContentContainer>
    </Box>
  );
};
export default FilterButtons;
