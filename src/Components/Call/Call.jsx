import React from "react";
import './Call.css';

const Call = () => {
    const phoneNumber = '+91 9999058683'; // Replace with actual number

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div id="call" className="call"
      onClick={handleCall}
      style={{
        padding: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        textAlign: 'center',
        borderRadius: '50px',
        width: '250px',
        margin: '25px auto',
        marginBottom:'30px',
        cursor: 'pointer',
        boxShadow: '0 0 20px rgba(0,0,0,0.3)',
       transition:'0.3'
      }}
    >
       💬 &nbsp;Whatsapp Now 
    </div>
  );
};




export default Call;
