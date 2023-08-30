const workers = new Worker('worker.js');
const workerTriangulo = new Worker('workerTriangulo.js');
const workerFatorial = new Worker('calculoDoFatorial.js');


function calculateSquare() {
  const inputElement = document.getElementById('inputNumber');
  const inputNumber = Number(inputElement.value);
  workers.postMessage(inputNumber);
}

function calcularArea() {  
  workerTriangulo.postMessage({ 
    base: Number(document.getElementById('triangleBase').value),
    height: Number(document.getElementById('triangleHeight').value)
  });  
}

function calculoDoFatorial() {
  const inputElement = document.getElementById('inputNumberFatorial');
  const inputNumber = Number(inputElement.value);
  workerFatorial.postMessage(inputNumber);
}

workers.addEventListener('message', function(event) {
  const square = event.data;
  const resultElement = document.getElementById('result');
  resultElement.textContent = 'O quadrado do número é: ' + square;
});

workerTriangulo.addEventListener('message',(event) => {
  const squareArea = event.data;
  const resultElementArea = document.getElementById('resultCalculoArea');
  resultElementArea.textContent = `A area do Triangulo é : ${squareArea}`; 
});

workerFatorial.addEventListener('message', function(event) {
  const result = event.data;
  const resultElementFatorial = document.getElementById('ResultadoFatorial');
  resultElementFatorial.textContent = 'O fatorial do número é: ' + result;
});