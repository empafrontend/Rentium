import { Button } from '@mui/material';
import { IconChevronLeft } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate(-1)}
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
