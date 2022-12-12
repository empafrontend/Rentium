import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { FC, PropsWithChildren } from 'react';
import BackButton from './BackButton';

interface Props {
  background?: string;
  backButton?: boolean;
}

const ContentContainer: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        background: props.background ? props.background : '#fff',
        minHeight: { xs: 'calc(100vh - 12rem)', sm: 'calc(100vh - 13rem)' },
        py: 5,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: '100%',
          position: 'absolute',
          zIndex: -999,
          left: 0,
          top: '-8rem',
          background: props.background ? props.background : '#fff',
          height: '8rem',
        }}
      />
      <Box
        sx={{
          width: '100%',
          position: 'absolute',
          zIndex: -999,
          right: 0,
          bottom: '-5rem',
          background: props.background ? props.background : '#fff',
          height: '5rem',
        }}
      />
      {props.backButton ? <BackButton /> : null}
      <Container>{props.children}</Container>
    </Container>
  );
};

export default ContentContainer;
