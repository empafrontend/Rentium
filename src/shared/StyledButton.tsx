import { Button } from '@mui/material';
import { MouseEventHandler } from 'react';

interface Props {
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  content: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

// this component will be deleted as this was added to theme - use <Button> instead
const StyledButton = (props: Props) => {
  return (
    <Button
      variant="contained"
      type={props.htmlType ? props.htmlType : 'button'}
      sx={{
        borderRadius: 4,
        background: '#5D6DD8',
        boxShadow: 'none',
        textTransform: 'unset',
      }}
      onClick={props.onClick}
    >
      {props.content}
    </Button>
  );
};

export default StyledButton;
