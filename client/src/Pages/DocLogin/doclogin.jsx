import { Input, Button } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from '../../utils/axios';
import './doclogin.css';
//import Password from 'antd/es/input/Password';

const DocLogin = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: '', password: '' });

  const onChange = (e, key) => {
    setLogin({ ...login, [key]: e.target.value });
  };

  console.log(login);

  const onLogin = async () => {
    try {
      const response = await axios.post('/doctor/login', login);
      //console.log(response);
      //console.log(response.data);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('ID', response.data.id);
      navigate('/doctor/home');
    } catch (e) {
      //console.log(e);
      toast.error('Email or Password incorrect', { position: 'top-center' });
      console.log('error catch working');
    }
  };

  return (
    <>
      <div className="doc-login-form">
        <ToastContainer />
        <h1>Doctor Login</h1>
        <label>Email</label>
        <Input onChange={e => onChange(e, 'email')} />
        <label>Password</label>
        <Input type="password" onChange={e => onChange(e, 'password')} />
        <Button onClick={onLogin}>Login</Button>
      </div>
    </>
  );
};

export default DocLogin;
