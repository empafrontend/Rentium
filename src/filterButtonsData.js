import hat from '../src/Assets/hattIkon.png';
import house from '../src/Assets/husIkon.png';
import car from '../src/Assets/moppeIkon.png';
import shoe from '../src/Assets/skoIkon.png';
import tool from '../src/Assets/verktygIkon.png';

const filterButtons = [
  {
    text: 'Skor',
    category: 'shoes',
    img: shoe,
    id: 1,
  },
  {
    text: 'Hattar',
    category: 'hats',
    img: hat,
    id: 2,
  },
  {
    text: 'Verktyg',
    category: 'tools',
    img: tool,
    id: 3,
  },
  {
    text: 'Boende',
    category: 'housing',
    img: house,
    id: 4,
  },
  {
    text: 'Fordon',
    category: 'vehicle',
    img: car,
    id: 5,
  },
];

export default filterButtons;
