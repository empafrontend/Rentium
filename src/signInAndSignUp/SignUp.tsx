import { Box, Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useUser } from '../Context/UserContextProvider';
import ContentContainer from '../shared/ContentContainer';
import InputField from '../shared/InputField';

const validationSchema = yup.object({
  username: yup
    .string()
    .required('Required')
    .min(3, 'Användarnamn måste vara mellan 3 till 20 karaktärer')
    .max(20, 'Användarnamn måste vara mellan 3 till 20 karaktärer'),
  email: yup.string().email().required('Required'),
  password: yup
    .string()
    .required('Vänligen fyll i ditt lösenord')
    .min(6, 'Lösenord måste vara minst 6 karaktärer'),
});

const SignUp = () => {
  const { handleSignUp, handleGoogleSignIn } = useUser();
  const formik = useFormik({
    initialValues: { username: '', email: '', password: '' },
    validationSchema: validationSchema,
    validateOnMount: true,
    onSubmit: (values) => handleSignUp(values),
  });

  return (
    <ContentContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          rowGap: 5,
        }}
      >
        <Typography component="h1" variant="h1" mb={-1}>
          Välkommen!
        </Typography>{' '}
        <Box
          component="form"
          maxWidth={350}
          minWidth={300}
          margin="auto"
          sx={{ display: 'flex', flexDirection: 'column', rowGap: 4 }}
          onSubmit={formik.handleSubmit}
        >
          <Button
            variant="contained"
            onClick={handleGoogleSignIn}
            sx={{
              background: '#fff',
              border: 'solid #5D6DD8 2px',
              color: '#5D6DD8',
              '&:hover': { background: '#ECEFFF' },
            }}
          >
            <img
              alt="Google"
              width="15px"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              style={{ margin: 8 }}
            />
            Logga in med Google
          </Button>
          <Typography variant="body1" my={-1} sx={{ alignSelf: 'center' }}>
            eller
          </Typography>
          <Typography component="h1" variant="h3" mb={-1}>
            Skapa konto
          </Typography>
          <InputField
            label="Användarnamn"
            type="username"
            value={formik.values.username}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            onChange={formik.handleChange}
          />
          <InputField
            label="E-postadress"
            type="email"
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onChange={formik.handleChange}
          />
          <InputField
            label="Lösenord"
            type="password"
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onChange={formik.handleChange}
          />
          <Button variant="contained" type="submit">
            Registrera
          </Button>
        </Box>
        <Typography>
          Har du redan ett konto?{' '}
          <Box
            component="span"
            fontWeight={400}
            sx={{ display: 'inline', color: '#302892' }}
          >
            <Link to="/sign-in">Logga in!</Link>
          </Box>
        </Typography>
      </Box>
    </ContentContainer>
  );
};
export default SignUp;
