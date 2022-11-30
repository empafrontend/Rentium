import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from './Context/UserContextProvider';

const Protected: FC<PropsWithChildren> = (props) => {
  const { user } = useUser();
  return !user.email ? <Navigate to="/" /> : <>{props.children}</>;
};

export default Protected;
