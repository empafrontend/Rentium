import { Button } from '@mui/material';
import { IconChevronLeft } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import { useNavi } from '../Context/NavigationContext';

const BackButton = () => {
  const navigate = useNavigate();
  const { setFilterNavigation } = useNavi();

  const handleClick = () => {
    setFilterNavigation(false);
    navigate(-1);
  };

  return (
    <Button
      onClick={handleClick}
      variant="contained"
      sx={{
        position: 'absolute',
        minWidth: 30,
        maxWidth: 30,
        height: 30,
        padding: 0,
      }}
    >
      <IconChevronLeft size={14} stroke={3} />
    </Button>
  );
};

export default BackButton;
