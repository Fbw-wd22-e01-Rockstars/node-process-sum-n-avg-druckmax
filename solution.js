const argvs = process.argv.slice(2);

// Convert arguments to numbers
const convertToNumber = (...args) => args.map((x) => parseInt(x));

// Check for NaN
const checkHandler = (...args) => {
  const convertedNumbers = convertToNumber(...args)
  if (convertedNumbers.includes(NaN)) {
    const findNaN = convertedNumbers.findIndex((x) => isNaN(x));
    console.log(
      `Sorry, the argument ${args[findNaN]} is not a number, please try again`
    );
    return false;
  } else {
    return true;
  }
};

// Add the arguments
const sumHandler = (...args) => {
  const convertedNumbers = convertToNumber(...args)
  const result = convertedNumbers.reduce((prev, cur) => cur + prev, 0);
  return result;
};

// Print sum result
const sum = (...args) => {
  if (checkHandler(...args)) console.log(sumHandler(...args));
};
// Print average result
const avg = (...args) => {
  if (checkHandler(...args)) console.log(sumHandler(...args) / args.length);
};

switch (argvs[0]) {
  case "sum":
    sum(...argvs.slice(1));
    break;
  case "avg":
    avg(...argvs.slice(1));
    break;
  default:
    console.log(
      'I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)'
    );
    break;
}
