import React from 'react';
import ReactJson from "react-json-view";
import ReactLoading from "react-loading";


const APIResponse = (response) => {
  
    return (
      <div className="numbers-container">
        {response.response.loading ? (
          <ReactLoading type="spin" color="spin" height={"5%"} width={"5%"} />
        ) : response.response.data === "bad request" ? (
          <h2>Bad Request, try again please.</h2>
        ) : (
          <ReactJson src={response.response.data} name={null}/>
        )}
      </div>
    );
};

export default APIResponse; 
