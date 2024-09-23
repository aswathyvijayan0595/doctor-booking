import './DocsignUp.css';
import { Input, Button, notification } from 'antd';
import { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/axios';

const DocsignUp = () => {
  const navigate = useNavigate();
  const [signup, setSignUp] = useState({
    firstname: '',
    lastname: '',
    email: '',
    qualification: '',
    position: '',
    password: '',
    confirmPassword: '',
    image: '',
  });
  console.log(signup, 'signup');
  const [showpassword, setShowPassword] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedName, setSelectedName] = useState(null);

  const onTogglePassword = () => {
    setShowPassword(!showpassword);
  };

  const handleImageChange = event => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setSelectedName(file.name);
      setSignUp({ ...signup, image: file });
    }
  };

  // const removeImageAndname = () => {
  //   setSelectedImage(null);
  //   setSelectedName(null);
  //   setSignUp({ ...signup, image: '' });
  // };

  const handleChangeInput = (e, key) => {
    setSignUp({ ...signup, [key]: e.target.value });
  };

  const onSignUpClick = async () => {
    try {
      const formData = new FormData();

      formData.append('firstName', signup.firstname);
      formData.append('lastName', signup.lastname);
      formData.append('email', signup.email);
      formData.append('qualification', signup.qualification);
      formData.append('position', signup.position);
      formData.append('password', signup.password);
      formData.append('confirmPassword', signup.confirmPassword);

      if (selectedImage) {
        formData.append('image', selectedImage);
      }

      const response = await axios.post('/doctor/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response);
      notification.success({
        message:"Success!!!",
        description:"Doctor Account created Successfully!!!"
      })
      navigate('/doctor/login');
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
    <div className="signUpMain">
      <div className="doc_signup_form">
        <h1>SignUp</h1>
        <div className="name">
          <div className="fname">
            <label>First Name</label>
            <Input
              className="inputClass"
              placeholder="Enter your first name..."
              onChange={e => handleChangeInput(e, 'firstname')}
            />
          </div>

          <div className="lname">
            <label>Last Name</label>
            <Input
              className="inputClass"
              placeholder="Enter your last name..."
              onChange={e => handleChangeInput(e, 'lastname')}
            />
          </div>
        </div>
        <label>Email</label>
        <Input
          className="inputClass"
          placeholder="Enter your email address..."
          onChange={e => handleChangeInput(e, 'email')}
        />
        <div className="pos_qual">
          <div className="qual">
            <label>Qualification</label>
            <Input
              className="inputClass"
              placeholder="Enter your qualification..."
              onChange={e => handleChangeInput(e, 'qualification')}
            />
          </div>
          <div className="pos">
            <label>Position</label>
            <Input
              className="inputClass"
              placeholder="Enter your position..."
              onChange={e => handleChangeInput(e, 'position')}
            />
          </div>
        </div>

        <label>Password</label>
        <div className="input-div" style={{ position: 'relative' }}>
          <Input
            className="inputClass"
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
          className="inputClass"
          placeholder="confirm password"
          type="password"
          onChange={e => handleChangeInput(e, 'confirmPassword')}
        />
        <label>Upload Image</label>
        <div className="uploadImage">
          <input
            id="upload"
            type="file"
            name="myImage"
            onChange={handleImageChange}
          />
          {selectedImage && (
            <div>
              <img
                alt="not found"
                src={URL.createObjectURL(selectedImage)}
                style={{ width: '100px', height: '80px'}}
              />
              <br />
              <br />
              {/* <button onClick={removeImageAndname}>Remove</button> */}
            </div>
          )}
        </div>

        <div className="signup_btn">
          <Button onClick={onSignUpClick}>Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default DocsignUp;
