import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";
const App = () => {
  const [value, setValue] = useState(0);
  let linearModel = tf.Sequential;
  let prediction;

  const trainNewModel = async () => {
    // Define a model for linear regression
    linearModel = tf.sequential();
    linearModel.add(
      tf.layers.dense({
        units: 1,
        inputShape: [1]
      })
    );
    // Preparing model for training, specify loss and optimizer
    linearModel.compile({
      loss: "meanSquaredError",
      optimizer: "sgd"
    });

    // Training data
    const xs = tf.tensor1d([3.2, 4.4, 5.5]);
    const ys = tf.tensor1d([1.6, 2.7, 3.5]);

    await linearModel.fit(xs, ys);

    console.log("Model trained");
  };

  const predict = number => {
    const output = linearModel.predict(tf.tensor2d([number], [1, 1]));
    prediction = Array.from(output.dataSync())[0];
  };

  return (
    <div
      style={{ marginTop: "15px", display: "flex", justifyContent: "center" }}
    >
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        name=""
        id=""
      />
    </div>
  );
};

export default App;
