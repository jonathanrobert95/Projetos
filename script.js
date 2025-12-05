function drawNumber() {
  const what = document.querySelector('.input-what');
  const inpuMin = document.querySelector('.input-min');
  const inputMax = document.querySelector('.input-max');
  const result = document.getElementById('resultado');  

  const amount = parseInt(what.value);
  const min = parseInt(inpuMin.value);
  const max = parseInt(inputMax.value);

  if (isNaN(amount) || isNaN(min) || isNaN(max)) {
    result.innerHTML = 'Por favor, insira valores válidos.';
    return; 
  }

 if (min >= max) {
    result.innerHTML = '⚠️ O número mínimo deve ser menor que o máximo.';
    return;
  }

  if (amount <= 0) {
    result.innerHTML = '⚠️ A quantidade deve ser maior que zero.';
    return;
  }

  const intervalo = max - min + 1;
  if (amount > intervalo) {
    result.innerHTML = '⚠️ Intervalo muito pequeno para essa quantidade de números.';
    return;
  }

  const numeros = new Set();
  while (numeros.size < amount) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    numeros.add(numeroAleatorio);
  }

  const lista = Array.from(numeros).sort((a, b) => a - b);
  result.innerHTML = `🎲 Números sorteados: ${lista.join(', ')}`;
}