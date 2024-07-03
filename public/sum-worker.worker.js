onmessage = function(event) {
    const { numbers } = event.data;
    
    const sum = numbers.reduce((acc, num) => acc + num, 0);
  
    postMessage({ result: sum });
};