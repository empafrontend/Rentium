import { TextField } from '@mui/material';

interface Props {
  label: string;
  rows?: number;
  type: string;
  value: string | number;
  error?: boolean;
  helperText?: string | undefined | boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
const InputField = (props: Props) => {
  return (
    <TextField
      multiline
      variant="standard"
      label={props.label}
      rows={props.rows}
      id={props.type}
      type={props.type}
      value={props.value}
      error={props.error}
      helperText={props.helperText}
      onChange={props.onChange}
      InputLabelProps={{
        shrink: true,
        style: { color: '#535353', fontWeight: 300, paddingLeft: 5 },
      }}
      InputProps={{
        disableUnderline: true,
        style: {
          background: '#F5F5F5',
          borderRadius: 15,
          minHeight: 35,
          paddingLeft: 15,
          paddingRight: 15,
          fontSize: 13,
        },
      }}
      FormHelperTextProps={{
        style: {
          paddingLeft: 5,
          fontWeight: 300,
          position: 'absolute',
          bottom: -22,
        },
      }}
    />
  );
};

export default InputField;
