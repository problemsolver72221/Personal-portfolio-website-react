// Function to execute X function, Y number of times with Z of interval delay
export function recursiveDelay(
  functionToCall,
  executionsNumber,
  timeoutInSeconds
) {
  if (executionsNumber) {
    //exit condition

    functionToCall(); // external function execution

    setTimeout(() => {
      recursiveDelay(functionToCall, executionsNumber - 1, timeoutInSeconds); //recursive call
    }, 1000 * timeoutInSeconds);
  }
}

//   // External function to call (example)
//   let externalFunctionToCall = function() {
//     console.log(new Date().getSeconds());
//   };

//   // Initial call
//   recursiveDelay(externalFunctionToCall, 5, 1);
