import React from 'react';
import ReactJson from "react-json-view";
import ReactLoading from "react-loading";

const theme = {
  scheme: "monokai",
  author: "wimer hazenberg (http://www.monokai.nl)",
  base00: "#272822",
  base01: "#383830",
  base02: "#49483e",
  base03: "#75715e",
  base04: "#a59f85",
  base05: "#f8f8f2",
  base06: "#f5f4f1",
  base07: "#f9f8f5",
  base08: "#f92672",
  base09: "#fd971f",
  base0A: "#f4bf75",
  base0B: "#a6e22e",
  base0C: "#a1efe4",
  base0D: "#66d9ef",
  base0E: "#ae81ff",
  base0F: "#cc6633",
};

const APIResponse = (response) => {
  
    return (
      <div className="numbers-container">
        {response.response.loading ? (
          <ReactLoading type="spin" color="spin" height={"2%"} width={"2%"} />
        ) : response.response.data === "bad request" ? (
          <h2>Bad Request, try again please.</h2>
        ) : (
          <ReactJson src={response.response.data} name={null}/>
        )}
      </div>
    );
};

export default APIResponse; 
