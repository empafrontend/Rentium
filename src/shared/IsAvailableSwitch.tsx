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
    <FormGroup sx={{ pt: 1, pl: 1 }}>
      <FormControlLabel
        control={
          <Switch
            checked={props.ad.isAvailable}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            onChange={() => handleChange(props.ad.id!)}
          />
        }
        label={
          <Typography fontSize={9} ml={-2}>
            Tillgänglig
          </Typography>
        }
        sx={{
          height: 15,
          display: 'flex',
          '& .MuiSwitch-switchBase': {
            padding: 1.05,
            '&.Mui-checked': {
              transform: 'translateX(11px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#5D6DD8',
              },
            },
          },
          '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            marginTop: 0.6,
            marginLeft: 0.6,
            transition: theme.transitions.create(['width'], {
              duration: 200,
            }),
          },
          '& .MuiSwitch-track': {
            width: 25,
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor: '#ECECEC',
            boxSizing: 'border-box',
          },
        }}
      />
    </FormGroup>
  );
};

export default IsAvailableSwitch;
