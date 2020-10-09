import React from 'react';
import PhoneNumber from './PhoneNumber';
import axios from 'axios';

const InputsList = ({setResponse, Response, numberList, setNumberList}) => {
  const submitNumberHandler = (e) => {
    e.preventDefault();
    const numberArray = Object.values(numberList).map(function (value) {
      return value.phoneNumber;
    });
    console.log(`Requesting: ${numberArray}`);
    setResponse({ loading: true, loaded: false });
        axios
          .post(`https://pnia-challenge.herokuapp.com/aggregate`, numberArray)
          .then((res) => {
              console.log(res.data);
              setResponse({
                loading: false,
                loaded: true,
                data: res.data,
              });
              setNumberList([]);
          })
          .catch((e) => {
            console.error(e);
            setResponse({
                loading: false,
                loaded: true,
                data: "bad request",
            });
          });
  };
  return (
    <div>
    <div className="submit-num-container">
      <button onClick={submitNumberHandler} className="submit-btn">
        Submit
      </button>
    </div>
    <div className="numbers-container">
      <ul className="inputs-list">
        {numberList.map((object) => {
            return (
                <PhoneNumber
                numberList={numberList}
                setNumberList={setNumberList}
                phoneNumberObj={object}
                key={object.id}
                />
                );
            })}
      </ul>
    </div>
    </div>
  );
};

export default InputsList; 
