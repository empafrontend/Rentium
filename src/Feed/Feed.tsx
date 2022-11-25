import { Box } from '@mui/material';
import AdFilterFeed from '../AdFilterFeed';
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
      <AdFilterFeed />
      <FeedCard />
    </Box>
  );
}

export default Feed;
