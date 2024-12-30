function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
  
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
  
  function displaySequence(numbers) {
    const sequenceContainer = document.getElementById('sequence');
    sequenceContainer.innerHTML = '';
    
    numbers.forEach((num, index) => {
      const numberElement = document.createElement('div');
      numberElement.className = 'number';
      numberElement.textContent = num;
      numberElement.style.animationDelay = `${index * 0.1}s`;
      sequenceContainer.appendChild(numberElement);
    });
  }
  
  document.getElementById('calculate').addEventListener('click', () => {
    const input = document.getElementById('number');
    const n = parseInt(input.value);
    
    if (n < 1 || n > 100) {
      alert('Por favor ingresa un número entre 1 y 100');
      return;
    }
    
    const sequence = fibonacci(n);
    displaySequence(sequence);
  });
  
  // Initial calculation
  displaySequence(fibonacci(10));