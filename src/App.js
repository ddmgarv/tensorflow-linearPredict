import React, { useState, useEffect } from "react";
import * as tfvis from "@tensorflow/tfjs-vis";
import { predictVal } from "./Model/LinearRegression";
import { getData } from "./LoadData/getData";
import {
  loadParameters,
  createModel,
  convertToTensor,
  trainModel,
  testModel
} from "./Model/2DPrediction";

const App = () => {
  const [inputVal, setInputVal] = useState(0);
  const [predictedVal, setPredictedVal] = useState();

  // useEffect(() => {
  //   setPredictedVal(predictVal(inputVal));
  // }, [inputVal]);

  const loadModel = async () => {
    const imgData = await getData();
    loadParameters(imgData);
    const model = await createModel();
    tfvis.show.modelSummary({ name: "Model Summary" }, model);
    const tensorData = await convertToTensor(imgData);
    const trainedModel = await trainModel(
      model,
      tensorData.inputs,
      tensorData.labels
    );
    testModel(trainedModel, imgData, tensorData);
    console.log("Model trained!");
  };

  useEffect(() => {
    loadModel();
  }, []);
  return (
    // <div
    //   style={{
    //     marginTop: "15px",
    //     display: "flex",
    //     justifyContent: "center"
    //   }}
    // >
    //   <input
    //     type="text"
    //     value={inputVal}
    //     onChange={e => setInputVal(e.target.value)}
    //     name=""
    //     id=""
    //   />
    //   <div>{predictedVal}</div>
    // </div>
    <div></div>
  );
};

export default App;
