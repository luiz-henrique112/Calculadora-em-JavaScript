// Acessando o elemento de entrada e os botões
const input = document.querySelector('.input-valor');
const buttons = document.querySelectorAll('.key li');

// Configurando o evento de clique para cada botão
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

// Função de tratamento de evento para lidar com o clique em cada botão
function handleClick(event) {
  const buttonValue = event.target.innerHTML;

  if (buttonValue === 'c') {
    input.innerHTML = ''; // Limpa o campo de entrada quando o botão "c" é clicado
  } else if (buttonValue === '=') {
    const equation = input.innerHTML;

    if (equation) {
      try {
        const result = eval(equation); // Avalia a expressão
        if (isNaN(result) || !isFinite(result)) {
          alert('Expressão inválida'); // Exibe uma mensagem de erro caso a expressão seja inválida
          input.innerHTML = ''; // Limpa o campo de entrada
        } else {
          input.innerHTML = result; // Exibe o resultado no campo de entrada
        }
      } catch (error) {
        alert('Erro na expressão'); // Exibe uma mensagem de erro caso ocorra um erro na avaliação da expressão
        input.innerHTML = ''; // Limpa o campo de entrada
      }
    }
  } else {
    input.innerHTML += buttonValue; // Adiciona o valor do botão ao campo de entrada
  }
}


