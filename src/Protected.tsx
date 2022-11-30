import { FC, Fragment, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from './Context/UserContextProvider';

const Protected: FC<PropsWithChildren> = (props) => {
  const { user } = useUser();
  return !user ? <Navigate to="/" /> : <Fragment>{props.children}</Fragment>;
};

export default Protected;
