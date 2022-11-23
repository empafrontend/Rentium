import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import InputField from '../shared/InputField';

const SignUp = () => {
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
        <InputField
          label="E-postadress"
          type="email"
          value="milliecheung@outlook.com"
        />
        <InputField label="Lösenord" type="password" value="12345678" />

        <Button variant="contained">Registrera</Button>
      </Box>
      <Typography>
        Har du redan ett konto?{' '}
        <Box
          component="span"
          fontWeight={500}
          sx={{ display: 'inline', cursor: 'pointer' }}
        >
          <Link to="/sign-in">Logga in!</Link>
        </Box>
      </Typography>
    </Container>
  );
};
export default SignUp;
