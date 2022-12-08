import { FormControlLabel, FormGroup, Switch, Typography } from '@mui/material';
import { Ad, useAd } from '../Context/AdContextProvider';
import { theme } from '../theme';

interface Props {
  ad: Ad;
}

const IsAvailableSwitch = (props: Props) => {
  const { updateIsAvailableFalse, updateIsAvailableTrue } = useAd();
  const handleChange = (id: string) => {
    props.ad.isAvailable
      ? updateIsAvailableFalse(id)
      : updateIsAvailableTrue(id);
  };

  return (
    <FormGroup sx={{ pl: 1, pt: 1 }}>
      <FormControlLabel
        control={
          <Switch
            sx={{ p: 0, height: 15 }}
            checked={props.ad.isAvailable}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            onChange={() => handleChange(props.ad.id!)}
          />
        }
        label={
          <Typography fontSize={9} ml={-3.5}>
            Tillgänglig
          </Typography>
        }
        sx={{
          display: 'flex',
          '& .MuiSwitch-switchBase': {
            background: 'none',
            '&.Mui-checked': {
              transform: 'translateX(11px)',
              color: '#fff',
              background: 'none',
              '& + .MuiSwitch-track': {
                opacity: 1,
                background: '#5D6DD8',
              },
            },
          },
          '& .MuiSwitch-thumb': {
            transform: 'translateX(-8px)',
            mt: -0.95,
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], {
              duration: 200,
            }),
          },
          '& .MuiSwitch-track': {
            width: 25,
            height: 15,
            borderRadius: 16 / 2,
            opacity: 1,
            background: '#ECECEC',
            boxSizing: 'border-box',
          },
        }}
      />
    </FormGroup>
  );
};

export default IsAvailableSwitch;
