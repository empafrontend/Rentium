import { Box } from '@mui/material';
import FilterButtons from '../FilterButtons';
import './feed.css';
import FeedCard from './FeedCard';

function Feed() {
  return (
    <Box id="container">
      <div>
        <FilterButtons />
      </div>
      <Box
        className="feed"
        sx={{
          background:
            'linear-gradient(95.91deg, #6d82c8 6.74%, #3132ab 88.88%)',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <Box
          id="ScrollBox"
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
    </Box>
  );
}

export default Feed;
