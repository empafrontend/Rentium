import { Button } from '@mui/material';
import { MouseEventHandler } from 'react';

interface Props {
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  content: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = (props: Props) => {
  return (
    <Button
      variant="contained"
      type={props.htmlType ? props.htmlType : 'button'}
      sx={{
        '&:hover': {
          background: '#ECECEC',
          color: '#535353',
          boxShadow: 'none',
        },
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
