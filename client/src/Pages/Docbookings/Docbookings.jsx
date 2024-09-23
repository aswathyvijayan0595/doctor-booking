import React, { useEffect, useState } from 'react';
import './DocBookings.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import axios from '../../utils/axios';

const Docbookings = () => {
  const [slotsData, setSlotsData] = useState([]);
  const doctorId = localStorage.getItem('ID'); 

  useEffect(() => {
    if (doctorId) { 
      const viewSlotData = async () => {
        try {
          const response = await axios.get(`/slots?doctor=${doctorId}`);
          setSlotsData(response.data.data);
        } catch (e) {
          console.log(e);
        }
      };
      
      viewSlotData();
    } else {
      console.error('Doctor ID not found');
    }
  }, [doctorId]); 

  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <div className="availability-container">
          <h2>My Slots Availability</h2>
          <div className="slotsDetails">
            {slotsData && slotsData.length > 0 ? (
              slotsData.map(item => (
                <div key={item._id} className='card_slots'>
                  <div className="card">
                  <h5>{item.date.split('T')[0]}</h5> 
                  </div>
                  {item.slots.map((slot, index) => (  
                    <div key={index} className="time_slots">
                      <h5>{slot.timeFrom} - {slot.timeTo}</h5>  
                      <h5>Slots: {slot.availableSlots}</h5> 
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <p>No slots available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docbookings;
