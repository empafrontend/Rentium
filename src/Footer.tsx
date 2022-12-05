import {
  AddCircleOutlineRounded,
  HomeOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import './footer.css';

function Footer() {
  return (
    <Box className="footer">
      <Box className="footer-navigation">
        <Link to="/">
          <HomeOutlined className="icon" fontSize="large" />
        </Link>
        <SearchOutlined className="icon" fontSize="large" />
        <Link
          className={!auth.currentUser ? 'hidden' : 'icon'}
          to={!auth.currentUser ? '/sign-in' : '/new-ad'}
        >
          <AddCircleOutlineRounded fontSize="large" />
        </Link>
        <Link to={!auth.currentUser ? '/sign-in' : '/my-page'}>
          {!auth.currentUser ? (
            <PersonOutlineOutlined className="icon" fontSize="large" />
          ) : (
            <Box
              component="img"
              className="img-icon icon:hover"
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              src={auth.currentUser.photoURL!}
            />
          )}
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
