import { Container } from '@mui/system';
import { FC, PropsWithChildren } from 'react';

interface Props {
  background?: string;
}

const ContentContainer: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <Container
      sx={{
        background: props.background ? props.background : '#fff',
        minHeight: { xs: 'calc(100vh - 11rem)', sm: 'calc(100vh - 18rem)' },
        // TODO: adjust minHeight based on header and footer height
        py: 5,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          position: 'absolute',
          zIndex: -999,
          left: 0,
          top: 0,
          background: props.background ? props.background : '#fff',
          mt: -5,
          minHeight: '100vh',
        }}
      />
      {props.children}
    </Container>
  );
};

export default ContentContainer;