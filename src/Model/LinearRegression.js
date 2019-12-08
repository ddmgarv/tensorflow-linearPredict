import * as tf from "@tensorflow/tfjs";

let linearModel = tf.Sequential;

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

trainNewModel();

export const predictVal = number => {
  console.log(linearModel);
  // To make sure the value passed in to the model is a number:
  let numVal = Number(number);
  // Calls the predict method to execute the model with a value and dimension
  const output = linearModel.predict(tf.tensor2d([numVal], [1, 1]));
  // TF works withs sessions, so to return a value that can be read by JS we need to convert it into an array
  let prediction = Array.from(output.dataSync())[0];
  return prediction;
};
