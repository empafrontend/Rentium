import { Button } from '@mui/material';
import { IconChevronUp } from '@tabler/icons';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [displayButton, setDisplayButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 400
        ? setDisplayButton(true)
        : setDisplayButton(false);
    });
  }, []);

  return displayButton ? (
    <Button
      variant="contained"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        minWidth: 35,
        maxWidth: 35,
        padding: 0,
        background: '#F6AF27',
        '&:hover': {
          background: '#FDD63C',
        },
      }}
    >
      <IconChevronUp />
    </Button>
  ) : null;
};

export default ScrollToTopButton;
