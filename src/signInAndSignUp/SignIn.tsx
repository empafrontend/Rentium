import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import InputField from '../shared/InputField';

const SignIn = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        placeItems: 'center',
        rowGap: 5,
      }}
    >
      Välkommen!
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 350,
          minWidth: 300,
          rowGap: 5,
        }}
      >
        <InputField label="Användarnamn" type="username" value="cheungmillie" />

        <InputField label="Lösenord" type="password" value="12345678" />
        <Button variant="contained">Logga in</Button>
      </Box>
      <Typography>
        Har du inget konto?{' '}
        <Box component="span" fontWeight={500} sx={{ display: 'inline' }}>
          <Link to="/sign-up">Registrera dig!</Link>
        </Box>
      </Typography>
    </Container>
  );
};

export default SignIn;
