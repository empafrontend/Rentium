import { Box } from '@mui/material';
import AdFilterFeed from '../AdFilterFeed';
import CategoryLength from '../categoryLength';
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
      <AdFilterFeed/>
      <CategoryLength/>
      <FeedCard />
    </Box>
  );
}

export default Feed;
