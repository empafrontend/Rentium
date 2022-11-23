import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import * as React from 'react';

const currencies = [
  {
    value: 'USD',
    label: 'SKOR',
  },
  {
    value: 'EUR',
    label: 'VERKTYG',
  },
  {
    value: 'BTC',
    label: 'KLÄDER',
  },
  {
    value: 'JPY',
    label: 'FORDON',
  },
];

export default function NewAdPage() {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

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
              value={currency}
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
            <TextField id="outlined-basic" variant="outlined" />
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
            <button className="h-14 w-40 bg-sky-600 my-4 rounded-md text-white">
              Lägg upp
            </button>
          </div>
        </div>
      </Box>
    </Container>
  );
}
