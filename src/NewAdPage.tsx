import { Button, Container, MenuItem, Select } from '@mui/material';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import * as yup from 'yup';
import InputField from './shared/InputField';

const validationSchema = yup.object({
  category: yup
    .string()
    .required('Required')
    .min(3, 'Username must be between 3 to 20 characters')
    .max(20, 'Username must be between 3 to 20 characters'),
  title: yup
    .string()
    .required('Required')
    .min(3, 'Username must be between 3 to 20 characters')
    .max(20, 'Username must be between 3 to 20 characters'),
  description: yup
    .string()
    .required('Required')
    .min(3, 'Username must be between 3 to 20 characters')
    .max(20, 'Username must be between 3 to 20 characters'),
  price: yup.number().required('Required'),
  location: yup
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
  const handleInput = (values: any) => console.log(values);
  const formik = useFormik({
    initialValues: {
      category: 'SHOES' || 'TOOLS' || 'CLOTHES' || 'VEHICLE',
      title: '',
      description: '',
      price: 0,
      location: '',
    },
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
        component="form"
        maxWidth={350}
        minWidth={300}
        margin="auto"
        sx={{ display: 'flex', flexDirection: 'column', rowGap: 4 }}
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col my-4">
          <span>Kategorier</span>
          <Select
            label="Kategori"
            type="category"
            name="category"
            value={formik.values.category}
            error={formik.touched.category && Boolean(formik.errors.category)}
            onChange={formik.handleChange}
          >
            {currencies.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </div>

        <InputField
          label="Rubrik"
          type="title"
          value={formik.values.title}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          onChange={formik.handleChange}
        />

        <InputField
          label="Beskrivning"
          type="description"
          value={formik.values.description}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          onChange={formik.handleChange}
        />

        <InputField
          label="Pris"
          type="price"
          value={formik.values.price}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
          onChange={formik.handleChange}
        />

        <InputField
          label="Plats"
          type="location"
          value={formik.values.location}
          error={formik.touched.location && Boolean(formik.errors.location)}
          helperText={formik.touched.location && formik.errors.location}
          onChange={formik.handleChange}
        />

        <Button variant="contained" type="submit" sx={{ width: 'fit-content' }}>
          Lägg upp
        </Button>
      </Box>
    </Container>
  );
}

export default NewAdPage;
