import { Box, Button, Modal, Typography } from '@mui/material';
import firebase from 'firebase/compat/app';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import { useUser } from '../Context/UserContextProvider';
import { firebaseConfig } from '../firebase';
import ContentContainer from '../shared/ContentContainer';
import InputField from '../shared/InputField';

firebase.initializeApp(firebaseConfig);

const validationSchema = yup.object({
  username: yup
    .string()
    .required('Required')
    .min(3, 'Användarnamn måste vara mellan 3 till 20 karaktärer')
    .max(20, 'Användarnamn måste vara mellan 3 till 20 karaktärer'),
  password: yup
    .string()
    .required('Vänligen fyll i ditt lösenord')
    .min(6, 'Lösenord måste vara minst 6 karaktärer'),
});

const SignIn = () => {
  const { handleSignIn, handleGoogleSignIn, user, handleSignOut } = useUser();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const showToastMessage = () => {
    toast.success('Du är inloggad', {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 10000,
    });
    console.log('toast');
  };

  // Closes modal
  const handleClose = () => setOpenModal(false);

  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: validationSchema,
    validateOnMount: true,
    onSubmit: (values) => handleSignIn(values),
    // handleSignIn(values)
  });

  return (
    <>
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
              onClick={() => {
                handleGoogleSignIn();
                showToastMessage();
              }}
              sx={{
                background: '#fff',
                border: 'solid #5D6DD8 2px',
                color: '#5D6DD8',
                '&:hover': { background: '#ECEFFF' },
              }}
            >
              <ToastContainer />
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
              type="text"
              id="username"
              value={formik.values.username}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              onChange={formik.handleChange}
            />
            <InputField
              label="Lösenord"
              type="password"
              id="password"
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

      <Modal open={openModal} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: '#fff',
            borderRadius: 5,
            boxShadow: 24,
          }}
        >
          <Box sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h3" component="h2" pb={2}>
              Är du säker?
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default SignIn;
