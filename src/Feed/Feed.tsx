import { Box } from '@mui/material';
import FeedCard from './FeedCard';

function Feed() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <FeedCard />
    </Box>
  );
}

export default Feed;
