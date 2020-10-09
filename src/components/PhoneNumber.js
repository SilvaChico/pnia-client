
import React from 'react';

const PhoneNumber = ({ phoneNumberObj, numberList, setNumberList }) => {
  const removeHandler = () => {
      setNumberList(numberList.filter((el) => el.id !== phoneNumberObj.id));
  };
  return (
    <div className="phone-number">
      <li className="phone-number-item">{phoneNumberObj.phoneNumber}</li>
      <button onClick={removeHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default PhoneNumber; 
