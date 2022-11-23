import { FormControl, Input, InputLabel } from '@mui/material';

interface Props {
  label: string;
  type: string;
  value: string;
}
const InputField = (props: Props) => {
  return (
    <FormControl variant="standard">
      <InputLabel htmlFor={props.type}>{props.label}</InputLabel>
      <Input required id={props.type} type={props.type} value={props.value} />
    </FormControl>
  );
};

export default InputField;
