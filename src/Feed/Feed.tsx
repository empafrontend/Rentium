import { Box } from '@mui/material';
import FeedCard from './FeedCard';

function Feed() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(95.91deg, #6d82c8 6.74%, #3132ab 88.88%)',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'white',
          borderTopRightRadius: '70px',
          borderBottomLeftRadius: '70px',
          overflow: 'scroll',
        }}
      >
        <FeedCard />
      </Box>
    </Box>
  );
}

export default Feed;
