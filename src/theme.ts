import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: ['Hind', 'Roboto'].join(','),
    h1: {
      fontSize: 30,
      fontWeight: 400,
    },
    h2: {
      fontSize: 26,
      fontWeight: 400,
    },
    h3: {
      fontSize: 20,
      fontWeight: 400,
    },
    h4: {
      fontSize: 16,
      fontWeight: 200,
    },
    body1: {
      fontFamily: 'Roboto',
      fontSize: 14,
      fontWeight: 300,
      color: '#383F4B', // dark
    },
    body2: {
      fontFamily: 'Roboto',
      fontSize: 11,
      fontWeight: 300,
      color: '#535353', // grey
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: 35,
          borderRadius: 20,
          background: '#5D6DD8',
          boxShadow: 'none',
          textTransform: 'unset',
          '&:hover': {
            background: '#3335A7',
            boxShadow: 'none',
          },
        },
      },
    },
  },
});
