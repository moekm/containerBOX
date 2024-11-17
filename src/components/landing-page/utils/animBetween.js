export default function animBetween(options) {
  if (typeof options !== "object")
    throw new Error("Expected an object. instead got: ", typeof options);

  if (options.maxVAL == null || options.minVAL == null)
    throw new Error("minVAL or/and maxVAL is/are undefined");

  const { maxVAL, minVAL, outputCount = 1, addUpTo } = options;
  let output = { values: [], percentages: [], valLength: 0 };

  // generates random values based on the outputCount number
  for (let i = 0; i < outputCount; i++) {
    const random = Math.floor(Math.random() * (maxVAL - minVAL + 1) + minVAL);
    output.valLength++;
    output.values.push(random);
  }

  // addUpTo: stretches the values to the "add up number" e.g addUpNumber = 100
  if (addUpTo) {
    const add = (num1, num2) => num1 + num2;
    const multiply = (num1, num2) => Math.round(num1 * num2);

    const sum = output.values.reduce(add);
    const scaleFactor = addUpTo / sum; // e.g addUpTo = 100

    output.percentages = output.values.map((num) => multiply(num, scaleFactor));

    // correcting floating point errors :<
    const percentage = output.percentages.reduce(add);
    const difference = addUpTo - percentage;

    const indexOfMaxValue = output.percentages.findIndex(
      (num) => num == Math.max(...output.percentages)
    );

    output.percentages[indexOfMaxValue] += difference;
  }

  return output;
}
