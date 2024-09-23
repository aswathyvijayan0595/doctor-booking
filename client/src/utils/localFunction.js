import { jwtDecode } from 'jwt-decode';

// Token validity checking
export const checkToken = () => {
  const token = localStorage.getItem('token');
  try {
    // exp,iat,id,role inside the decoded
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decoded && decoded.exp) {
        return  decoded.exp > currentTime
    }
    else{
        return false;
    }
  } catch (e) {
    return false;
  }
};

// Role validity
export const getRole = () => {
    const token = localStorage.getItem('token');
    try {
      const decoded = jwtDecode(token);
      return decoded.role;
    } catch (e) {
      return false;
    }
  };
  
