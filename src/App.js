import React, { useState, useEffect } from "react";
import { predictVal } from "./Model/LinearRegression";

const App = () => {
  const [inputVal, setInputVal] = useState(0);
  const [predictedVal, setPredictedVal] = useState();

  useEffect(() => {
    setPredictedVal(predictVal(inputVal));
  }, [inputVal]);

  return (
    <div
      style={{
        marginTop: "15px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <input
        type="text"
        value={inputVal}
        onChange={e => setInputVal(e.target.value)}
        name=""
        id=""
      />
      <div>{predictedVal}</div>
    </div>
  );
};

export default App;
