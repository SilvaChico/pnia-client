import React, { useState } from 'react';
import './App.css';

//importing components
import Form from './components/Form';
import InputsList from './components/InputsList'
import APIResponse from './components/APIResponse'

function App() {
  const [inputText, setInputText] = useState(''); 
  const [numberList, setNumberList] = useState([]);
  const [response, setResponse] = useState('');
  return (
    <div className="App">
      <header>
        <h1>pnia Interface</h1>
      </header>
      <Form
        inputText={inputText}
        numberList={numberList}
        setNumberList={setNumberList}
        setInputText={setInputText}
        setResponse={setResponse}
      />
      {numberList.length > 0 ? (
        <InputsList
          response={response}
          setResponse={setResponse}
          setNumberList={setNumberList}
          numberList={numberList}
        />
      ) : null}
      {response.loaded || response.loading ? (
        <APIResponse response={response} />
      ) : null}
    </div>
  );
}

export default App;
