import { Box, Button, Container, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useUser } from '../Context/UserContextProvider';
import InputField from '../shared/InputField';

const validationSchema = yup.object({
  username: yup
    .string()
    .required('Required')
    .min(3, 'Username must be between 3 to 20 characters')
    .max(20, 'Username must be between 3 to 20 characters'),
  email: yup.string().email().required('Required'),
  password: yup
    .string()
    .required('Required')
    .min(6, 'Password must be at least 6 characters'),
});

const SignUp = () => {
  const { handleSignUp } = useUser();
  const formik = useFormik({
    initialValues: { username: '', email: '', password: '' },
    validationSchema: validationSchema,
    validateOnMount: true,
    onSubmit: (values) => handleSignUp(values),
  });

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 5,
      }}
    >
      <Typography component="h2" variant="h1" mb={-1}>
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
    </Container>
  );
};
export default SignUp;
