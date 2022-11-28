import { Box, Button, Typography } from '@mui/material';
import firebase from 'firebase/compat/app';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useUser } from '../Context/UserContextProvider';
import { firebaseConfig, GoogleLogin } from '../firebase';
import ContentContainer from '../shared/ContentContainer';
import InputField from '../shared/InputField';

firebase.initializeApp(firebaseConfig);

const validationSchema = yup.object({
  username: yup
    .string()
    .required('Required')
    .min(3, 'Username must be between 3 to 20 characters')
    .max(20, 'Username must be between 3 to 20 characters'),
  password: yup
    .string()
    .required('Required')
    .min(6, 'Password must be at least 6 characters'),
});

const SignIn = () => {
  const { handleSignIn } = useUser();
  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: validationSchema,
    validateOnMount: true,
    onSubmit: (values) => handleSignIn(values),
  });

  return (
    <ContentContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          rowGap: 3,
        }}
      >
        <Typography component="h2" variant="h1">
          Välkommen tillbaka!
        </Typography>
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
            onClick={GoogleLogin}
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
            Logga in
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
            label="Lösenord"
            type="password"
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onChange={formik.handleChange}
          />
          <Button variant="contained" type="submit">
            Logga in
          </Button>
        </Box>
        <Typography variant="body1">
          Har du inget konto?{' '}
          <Box
            component="span"
            fontWeight={400}
            sx={{ display: 'inline', color: '#302892' }}
          >
            <Link to="/sign-up">Registrera dig!</Link>
          </Box>
        </Typography>
      </Box>
    </ContentContainer>
  );
};

export default SignIn;
