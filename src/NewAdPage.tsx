import { Button, MenuItem, Select, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ContentContainer from './shared/ContentContainer';
import InputField from './shared/InputField';

const validationSchema = yup.object({
  category: yup.string().required('Required'),
  title: yup
    .string()
    .required('Required')
    .min(3, 'Title must be between 3 to 20 characters')
    .max(20, 'Title must be between 3 to 20 characters'),
  img: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url'
    )
    .required('Please enter website'),
  description: yup
    .string()
    .required('Required')
    .min(10, 'Description must be between 10 to 500 characters')
    .max(500, 'Description must be between 10 to 500 characters'),
  price: yup.number().required('Required'),
  location: yup.string().required('Required'),
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
      category: '' || 'SHOES' || 'TOOLS' || 'CLOTHES' || 'VEHICLE',
      title: '',
      description: '',
      img: '',
      price: 0,
      location:
        '' || 'Norra Göteborg' || 'Centrala Göteborg' || 'Västra Göteborg',
    },
    validationSchema: validationSchema,
    validateOnMount: true,
    onSubmit: (values) => handleInput(values),
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
        <Typography component="h1" variant="h2">
          Vad vill du annonsera?{' '}
        </Typography>

        <Box
          component="form"
          maxWidth={500}
          minWidth={300}
          margin="auto"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: 4,
            width: '90%',
          }}
          onSubmit={formik.handleSubmit}
        >
          {/* <div className="flex flex-col my-4">
            <span>Kategorier</span> */}
          <Select
            label="Kategori"
            type="category"
            name="category"
            defaultValue=""
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
          {/* </div> */}

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
            label="Bild"
            type="img"
            value={formik.values.img}
            error={formik.touched.img && Boolean(formik.errors.img)}
            helperText={formik.touched.img && formik.errors.img}
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

          {/* <InputField
            label="Plats"
            type="location"
            value={formik.values.location}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
            onChange={formik.handleChange}
          /> */}

          <Select
            label="Plats"
            type="location"
            name="location"
            defaultValue=""
            value={formik.values.location}
            error={formik.touched.location && Boolean(formik.errors.location)}
            onChange={formik.handleChange}
          >
            <MenuItem value="Norra Göteborg">Norra Göteborg</MenuItem>
            <MenuItem value="Centrala Göteborg">Centrala Göteborg</MenuItem>
            <MenuItem value="Västra Göteborg">Västra Göteborg</MenuItem>
          </Select>

          <Button
            variant="contained"
            type="submit"
            sx={{ width: 150, alignSelf: 'center' }}
          >
            Lägg upp
          </Button>
        </Box>
      </Box>
    </ContentContainer>
  );
}

export default NewAdPage;
