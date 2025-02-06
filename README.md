# Silent NaN Failure in JavaScript Calculator

This repository demonstrates a common error in JavaScript: the silent failure of operations resulting in NaN (Not a Number). The `operate` function handles invalid operators by returning NaN, but this isn't explicitly handled in the main part of the code. This lack of explicit error handling can lead to unexpected behavior and difficult-to-debug issues.

The `bug.js` file contains the original code exhibiting this problem. The `bugSolution.js` file provides a corrected version which includes improved error handling and explicit checks for NaN values.  This improved version makes the code's behavior more predictable and robust.

## How to Reproduce the Bug

1. Clone this repository.
2. Open `bug.js` and observe the output in the console.
3. Notice that the final operation ('%'), where an invalid operator is passed, returns NaN without any indication of an error.

## How the Bug is Fixed

The `bugSolution.js` file addresses the issue by modifying the `operate` function and adding a check for NaN after each operation.  The code now handles invalid operators and the return of NaN more effectively.

This example highlights the importance of robust error handling and explicit checks in JavaScript to prevent silent failures and make your code easier to maintain and debug.