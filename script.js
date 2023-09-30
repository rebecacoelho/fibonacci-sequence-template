const fibonacciButton = document.getElementById('fibButton');
const fibonacciOutput = document.getElementById('fibOutput');
const fibonacciPrevious = document.getElementById('fibPrevious');

let currentFibonacciNumber = 0;
let nextFibonacciNumber = 1;
let previousFibonacciNumbers = [];

fibonacciButton.addEventListener('click', () => {
  const temp = nextFibonacciNumber;
  nextFibonacciNumber += currentFibonacciNumber;
  currentFibonacciNumber = temp;

  fibonacciOutput.textContent = `Número atual da sequência: ${currentFibonacciNumber}`;

  previousFibonacciNumbers.push(currentFibonacciNumber);
  fibonacciPrevious.textContent = `Números anteriores da sequência: ${previousFibonacciNumbers.join(', ')}`;
});
