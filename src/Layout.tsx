import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <Box>
      <ToastContainer />
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
