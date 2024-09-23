import './UserSignUp.css';
import { Input, Button, notification } from 'antd';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { useState } from 'react';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

const UserSignUp = () => {
  const navigate= useNavigate();
  const [showpassword, setShowPassword] = useState(false);
  const [userSignup, setUserSignUp] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  console.log(userSignup, 'userSignup');
  const onTogglePassword = () => {
    setShowPassword(!showpassword);
  };
  const handleChangeInput = (e, key) => {
    setUserSignUp({ ...userSignup, [key]: e.target.value });
  };
  const onUserSignupClick = async () => {
    try {
      const response = await axios.post('/user/signup', userSignup);
      console.log(response.data, 'user_signup');

      notification.success({
        message: 'Success!!',
        description: 'User Account created Successfully !!!',
      });
      navigate('/user/login');

    } catch (e) {
      if (e.response && e.response.status === 403) {
        notification.error({
          message: 'Failed!!',
          description: e.response.data.message,
        });
      } else {
        notification.error({
          message: 'Error',
          description: 'Something went wrong. Please try again later.',
        });
      }
      console.log(e);
    }
  };

  return (
    <div className="signup_main">
      <div className="user_signup_form">
        <h1>SignUp</h1>
        <div className="name">
          <div className="fname">
            <label>First Name</label>
            <Input
              className="input_Class"
              placeholder="Enter your first name..."
              onChange={e => handleChangeInput(e, 'firstName')}
            />
          </div>
          <div className="lname">
            <label>Last Name</label>
            <Input
              className="input_Class"
              placeholder="Enter your last name..."
              onChange={e => handleChangeInput(e, 'lastName')}
            />
          </div>
        </div>
        <label>Email</label>
        <Input
          className="input_Class"
          placeholder="Enter your email address..."
          onChange={e => handleChangeInput(e, 'email')}
        />
        <label>Password</label>
        <div className="input_div" style={{ position: 'relative' }}>
          <Input
            className="input_Class"
            placeholder="password..."
            type={showpassword ? 'text' : 'password'}
            onChange={e => handleChangeInput(e, 'password')}
          />
          <div className="passIcons" onClick={onTogglePassword}>
            {showpassword ? (
              <IoEyeOutline size={20} color="grey" />
            ) : (
              <IoEyeOffOutline size={20} color="grey" />
            )}
          </div>
        </div>
        <label>Confirm Password</label>
        <Input
          className="input_Class"
          placeholder=" confirm password..."
          type="password"
          onChange={e => handleChangeInput(e, 'confirmPassword')}
        />

        <div className="user_signup_btn">
          <Button onClick={onUserSignupClick}>Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
