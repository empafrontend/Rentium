import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Ad, useAd } from './Context/AdContextProvider';
import Protected from './Protected';
import ContentContainer from './shared/ContentContainer';
import InputField from './shared/InputField';

const validationSchema = yup.object().shape({
  category: yup.string().required('Vänligen fyll i en kategori'),
  title: yup
    .string()
    .required('Vänligen fyll i detta fält')
    .min(3, 'Rubrik måste vara mellan 3 till 20 karaktärer')
    .max(20, 'Rubrik måste vara mellan 3 till 20 karaktärer'),
  img: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Vänligen fyll i korrekt url'
    )
    .required('Vänligen fyll i en webbsida'),
  description: yup
    .string()
    .required('Vänligen fyll i detta fält')
    .min(10, 'Beskrivning måste vara mellan 10 till 500 karaktärer')
    .max(500, 'Beskrivning måste vara mellan 10 till 500 karaktärer'),
  price: yup.number().required('Vänligen fyll i detta fält'),
  location: yup.string().required('Vänligen fyll i detta fält'),
  startDate: yup
    .date()
    .required('Vänligen fyll i ett startdatum')
    .min(new Date(), 'Startdatumet måste efter idag.')
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      'Datumet måste vara inom ett år från idag.'
    ),
  endDate: yup
    .date()
    .required('Vänligen fyll i ett slutdatum')
    .min(yup.ref('startDate'), 'Slutdatumet måste vara senare än startdatumet')
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      'Datumet måste vara inom ett år från idag.'
    ),
});

const categories = [
  {
    value: 'SHOES',
    label: 'Skor',
  },
  {
    value: 'TOOLS',
    label: 'Verktyg',
  },
  {
    value: 'CLOTHES',
    label: 'Kläder',
  },
  {
    value: 'VEHICLE',
    label: 'Fordon',
  },
];

function NewAdPage() {
  const { createAd } = useAd();
  const formik = useFormik({
    initialValues: {
      category: 'SHOES' || 'TOOLS' || 'CLOTHES' || 'VEHICLE',
      title: '',
      description: '',
      img: '',
      price: 0,
      startDate: '',
      endDate: '',
      location: 'Norra Göteborg' || 'Centrala Göteborg' || 'Västra Göteborg',
    },
    validationSchema: validationSchema,
    validateOnMount: true,
    onSubmit: (values: Ad) => createAd(values),
  });

  return (
    <Protected>
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
            Vad vill du annonsera?
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
            <FormControl>
              <InputLabel
                variant="standard"
                htmlFor="category"
                sx={{ '&.Mui-focused': { color: '#535353' } }}
              >
                Kategori
              </InputLabel>
              <Select
                sx={{
                  background: '#F5F5F5',
                  borderRadius: 15,
                  height: 35,
                  fontSize: 13,
                  borderStyle: 'none',
                  paddingLeft: 2,
                  paddingRight: 2,
                }}
                disableUnderline
                variant="standard"
                type="category"
                name="category"
                defaultValue=""
                value={formik.values.category}
                error={
                  formik.touched.category && Boolean(formik.errors.category)
                }
                onChange={formik.handleChange}
              >
                {categories.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <InputField
              label="Rubrik"
              type="text"
              id="title"
              value={formik.values.title}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              onChange={formik.handleChange}
            />

            <InputField
              label="Beskrivning"
              type="text"
              id="description"
              rows={4}
              multiline={true}
              value={formik.values.description}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              onChange={formik.handleChange}
            />

            <InputField
              label="Bild URL"
              type="text"
              id="img"
              value={formik.values.img}
              error={formik.touched.img && Boolean(formik.errors.img)}
              helperText={formik.touched.img && formik.errors.img}
              onChange={formik.handleChange}
            />

            <InputField
              label="Pris"
              type="number"
              id="price"
              value={formik.values.price}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
              onChange={formik.handleChange}
            />

            <InputField
              label="Startdatum"
              type="date"
              id="startDate"
              value={formik.values.startDate}
              error={
                formik.touched.startDate && Boolean(formik.errors.startDate)
              }
              helperText={formik.touched.startDate && formik.errors.startDate}
              onChange={formik.handleChange}
            />

            <InputField
              label="Slutdatum"
              type="date"
              id="endDate"
              value={formik.values.endDate}
              error={formik.touched.endDate && Boolean(formik.errors.endDate)}
              helperText={formik.touched.endDate && formik.errors.endDate}
              onChange={formik.handleChange}
            />

            <FormControl>
              <InputLabel
                variant="standard"
                htmlFor="category"
                sx={{ '&.Mui-focused': { color: '#535353' } }}
              >
                Plats
              </InputLabel>
              <Select
                sx={{
                  background: '#F5F5F5',
                  borderRadius: 15,
                  height: 35,
                  fontSize: 13,
                  borderStyle: 'none',
                  paddingLeft: 2,
                  paddingRight: 2,
                }}
                disableUnderline
                type="location"
                name="location"
                variant="standard"
                value={formik.values.location}
                error={
                  formik.touched.location && Boolean(formik.errors.location)
                }
                onChange={formik.handleChange}
              >
                <MenuItem value="Norra Göteborg">Norra Göteborg</MenuItem>
                <MenuItem value="Centrala Göteborg">Centrala Göteborg</MenuItem>
                <MenuItem value="Västra Göteborg">Västra Göteborg</MenuItem>
              </Select>
            </FormControl>

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
    </Protected>
  );
}

export default NewAdPage;
