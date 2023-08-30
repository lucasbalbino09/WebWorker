self.addEventListener ('message', (event) => {
    const sides = event.data; // Recebe os dados da mensagem (base e altura)
    const base = sides.base;
    const height = sides.height;
   const squareArea = (base * height / 2); 
   self.postMessage(squareArea);
});