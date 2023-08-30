self.addEventListener('message', (event) => {
    const inputNumber = event.data;    
    let result = Number(inputNumber);
        for(let i = 1 ; i < inputNumber; i++ ) {
            result *= i;
        }
        
        self.postMessage(result);
  });