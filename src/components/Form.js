import React from 'react';
import shortid from 'shortid';

const Form = ({
  setInputText,
  numberList,
  setNumberList,
  inputText,
  setResponse,
}) => {
  const inputNumberHandler = (e) => {
    setInputText(e.target.value);
    setResponse({ loading: false, loaded: false });
  };
  const submitNumberHandler = (e) => {
    e.preventDefault();
    if(!inputText) return;
    setNumberList([
      ...numberList,
      { phoneNumber: inputText, id: shortid.generate() },
    ]);
    setInputText("");
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputNumberHandler}
        type="text"
        className="number-input"
      />
      <button
        onClick={submitNumberHandler}
        className="add-button"
        type="submit"
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form; 
