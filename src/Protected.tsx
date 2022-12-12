import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './firebase';

const Protected: FC<PropsWithChildren> = (props) => {
  return !auth.currentUser ? <Navigate to="/" /> : <>{props.children}</>;
};

export default Protected;
