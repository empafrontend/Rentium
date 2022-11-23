import { Box, Container, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import InputField from '../shared/InputField';
import StyledButton from '../shared/StyledButton';

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
  const handleSignIn = (values: any) => console.log(values); // no function yet!
  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: validationSchema,
    validateOnMount: true,
    onSubmit: (values) => handleSignIn(values),
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
      Välkommen! {/* to be wrapped with typography once there is theme */}
      <Box
        component="form"
        maxWidth={350}
        minWidth={300}
        margin="auto"
        sx={{ display: 'flex', flexDirection: 'column', rowGap: 5 }}
        onSubmit={formik.handleSubmit}
      >
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
        <StyledButton content="Logga in" htmlType="submit" />
      </Box>
      <Typography>
        Har du inget konto?{' '}
        <Box component="span" fontWeight={500} sx={{ display: 'inline' }}>
          <Link to="/sign-up">Registrera dig!</Link>{' '}
          {/* to be wrapped with typography once there is theme */}
        </Box>
      </Typography>
    </Container>
  );
};

export default SignIn;
