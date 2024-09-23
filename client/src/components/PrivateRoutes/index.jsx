import { Navigate, Outlet } from 'react-router-dom';
import { checkToken, getRole } from '../../utils/localFunction';

const PrivateRoute = props => {
  return checkToken() && props.role == getRole() ? <Outlet/> : <Navigate to="/doctor/login"/>

//   if (!checkToken()) {
//     return <Navigate to="/" />;
//   }

//   if (checkToken() && getRole() === props.role) {
//     return <Outlet />;
//   }

//   if (getRole() === 'DOCTOR') {
//     return <Navigate to="/doctor/login" />;
//   } else if (getRole() === 'USER') {
//     return <Navigate to="/user/login" />;
//   }

//   return <Navigate to="/" />;
};

export default PrivateRoute;
