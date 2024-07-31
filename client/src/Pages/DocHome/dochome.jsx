import axios from '../../utils/axios';
import { useEffect, useState } from 'react';
import './dochome.css';

const DocHome = () => {
  const [doctor, setDoctor] = useState({
    email: '',
    firstName: '',
    lastName: '',
    qualification: '',
    image: '',
  });
  // const getDocHome = async()=>{
  //     const doctorID=localStorage.getItem('ID');
  //     const response=await axios.get(/doctor/${doctorID});
  //     console.log(response)
  //     setDoctor(response.data)
  // }
  // useEffect(()=>{getDocHome();},[])

  const getDocProfile = async () => {
    const doctorID = localStorage.getItem('ID');
    const response = await axios.get(`/doctor/${doctorID}`);
    console.log(response);
    setDoctor(response.data);
  };

  useEffect(() => {
    getDocProfile();
  }, []);

  return (
    <>
      <h1>Home</h1>

      <p>{doctor.firstName}</p>
      <p>{doctor.lastName}</p>
      <img src={doctor.image} alt="" />
    </>
  );
};

export default DocHome;
