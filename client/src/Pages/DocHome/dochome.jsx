import './DocHome.css';
import axios from '../../utils/axios';
import html2pdf from 'html2pdf.js';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';

const DocHome = () => {
  const [doctor, setDoctor] = useState({
    firstName: '',
    lastName: '',
    qualification: '',
    image: '',
  });

  const getDoctorData = async () => {
    const doctorID = localStorage.getItem('ID');
    try {
      const response = await axios.get(`/doctor/${doctorID}`);
      setDoctor(response.data);
    } catch (error) {
      console.error('Error fetching doctor data:', error);
    }
  };

  const pdfDownloadClick = async () => {
    try {
      const response = await axios.get('/department/pdf');
      html2pdf().from(response.data).save();
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  useEffect(() => {
    getDoctorData();
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <h1>Doctor Home</h1>
        
        <div className="doctor-profile">
          <img 
            src={doctor.image || 'default-avatar.png'} 
            alt="Doctor" 
            className="doctor-image" 
          />
          <div className="doctor-info">
            <h2>{`${doctor.firstName} ${doctor.lastName}`}</h2>
            <p className="qualification">{doctor.qualification}</p>
            <button className="edit-button">Edit Profile</button>
          </div>
        </div>

        <button onClick={pdfDownloadClick} className="download-button">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default DocHome;
