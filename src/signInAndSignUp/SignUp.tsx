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
  email: yup.string().email().required('Required'),
  password: yup
    .string()
    .required('Required')
    .min(6, 'Password must be at least 6 characters'),
});

const SignUp = () => {
  const handleSignUp = (values: any) => console.log(values); // no function yet!
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

        <StyledButton content="Registrera" htmlType="submit" />
      </Box>
      <Typography>
        Har du redan ett konto?{' '}
        <Box component="span" fontWeight={500} sx={{ display: 'inline' }}>
          <Link to="/sign-in">Logga in!</Link>
          {/* to be wrapped with typography once there is theme */}
        </Box>
      </Typography>
    </Container>
  );
};
export default SignUp;
