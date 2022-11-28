import { Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';
import InputField from './shared/InputField';

const validationSchema = yup.object({
  title: yup
    .string()
    .required('Required')
    .min(3, 'Username must be between 3 to 20 characters')
    .max(20, 'Username must be between 3 to 20 characters'),
});

const currencies = [
  {
    value: 'SHOES',
    label: 'SKOR',
  },
  {
    value: 'TOOLS',
    label: 'VERKTYG',
  },
  {
    value: 'CLOTHES',
    label: 'KLÄDER',
  },
  {
    value: 'VEHICLE',
    label: 'FORDON',
  },
];

function NewAdPage() {
  const [category, setCategory] = React.useState('EUR');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const handleInput = (values: any) => console.log(values);
  const formik = useFormik({
    initialValues: { title: '' },
    validationSchema: validationSchema,
    validateOnMount: true,
    onSubmit: (values) => handleInput(values),
  });

  return (
    <Container>
      <div className="my-4">
        <h1 className="text-3xl">Vad vill du annonsera?</h1>
        <button className="h-32 w-32 bg-sky-600 my-4 rounded-md text-white">
          IKON
        </button>
      </div>
      <Box
        className="flex justify-center"
        component="form"
        sx={{
          '& .MuiTextField-root': { width: '65ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="flex flex-col my-4">
          <div className="flex flex-col my-4">
            <span>Kategorier</span>
            <TextField
              id="outlined-select-currency"
              select
              value={category}
              onChange={handleChange}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className="flex flex-col my-4">
            <span>Rubrik</span>
            <InputField
              label="Rubrik"
              type="title"
              value={formik.values.title}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              onChange={formik.handleChange}
            />
          </div>
          <div className="flex flex-col my-4">
            <span>Beskrivning av varan</span>
            <TextField id="outlined-basic" variant="outlined" />
          </div>
          <div className="flex flex-col my-4">
            <span>Pris</span>
            <TextField id="outlined-basic" variant="outlined" />
          </div>
          <div className="flex flex-col my-4">
            <span>Plats</span>
            <TextField id="outlined-basic" variant="outlined" />
          </div>
          <div className="flex justify-center">
            <Button variant="contained" type="submit">
              Logga in
            </Button>
          </div>
        </div>
      </Box>
    </Container>
  );
}

export default NewAdPage;
