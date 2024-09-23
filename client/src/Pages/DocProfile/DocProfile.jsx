import './DocProfile.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import axios from '../../utils/axios';

const DocProfile = () => {
  const [docprofile, setDocProfile] = useState();
  console.log(docprofile, 'docprofile');

  const getDocProfile = async () => {
    const doctorID = localStorage.getItem('ID');
    const response = await axios.get(`/doctor/${doctorID}`);
    setDocProfile(response.data);
  };
  useEffect(() => {
    getDocProfile();
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <h1>Doctor Profile</h1>

        <div className="doc_details">
          <div className="imageDiv">
            <img src={docprofile && docprofile.image} alt="" />
          </div>
          <div className="name">
            <h3>{`${docprofile && docprofile.firstName} ${
              docprofile && docprofile.lastName
            }`}</h3>
            <h3>{docprofile && docprofile.qualification}</h3>
            <h3>{docprofile && docprofile.email}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocProfile;
