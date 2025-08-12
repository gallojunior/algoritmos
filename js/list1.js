document.addEventListener("DOMContentLoaded", function () {
  loadData('data/list1.json');
});

async function exercicio1() {
  const { value: formValues } = await Swal.fire({
    title: "Cálculo de Área",
    html: `
      <label for="comprimento" class="w-75 text-start">Informe o comprimento:</label>
      <input id="comprimento"  class="swal2-input w-75 my-2">
      <label for="largura" class="w-75 text-start mt-2">Informe a largura:</label>
      <input id="largura"  class="swal2-input w-75 my-2">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("comprimento").value,
        document.getElementById("largura").value
      ];
    }
  });
  let comprimento = parseInt(formValues[0]);
  let largura = parseInt(formValues[1]);
  if (hasValue(comprimento) && hasValue(largura)) {
    let area = comprimento * largura;
    showSuccess("Cálculo de Área", `A área do retângulo é ${area}`);
  } else showError();
}


async function exercicio2() {
  const celsius = parseFloat((await Swal.fire({
    title: "Digite uma temperatura em Celsius",
    input: "text",
  })).value);
  if (hasValue(celsius)) {
    let fahrenheit = (celsius * (9.0 / 5.0)) + 32;
    showSuccess("Conversão de Temperatura", `${celsius}° celsius igual a ${fahrenheit}° fahrenheit`);
  } else showError();
}

async function exercicio3() {
  const { value: formValues } = await Swal.fire({
    title: "Cálculo de Área",
    html: `
      <label for="nota1" class="w-75 text-start">Digite a primeira nota:</label>
      <input id="nota1"  class="swal2-input w-75 my-2">
      <label for="nota2" class="w-75 text-start mt-2">Digite a segunda nota:</label>
      <input id="nota2"  class="swal2-input w-75 my-2">
      <label for="nota3" class="w-75 text-start mt-2">Digite a terceira nota:</label>
      <input id="nota3"  class="swal2-input w-75 my-2">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("nota1").value,
        document.getElementById("nota2").value,
        document.getElementById("nota3").value
      ];
    }
  });
  let nota1 = parseFloat(formValues[0]);
  let nota2 = parseFloat(formValues[1]);
  let nota3 = parseFloat(formValues[2]);
  if (hasValue(nota1) && hasValue(nota2) && hasValue(nota3)) {
    let media = (nota1 + nota2 + nota3) / 3.0;
    showSuccess("Média Aritmética", `A média das notas é ${round(media, 2)}`);
  } else showError();
}

async function exercicio4() {
  const { value: formValues } = await Swal.fire({
    title: "Cálculo de Distância",
    html: `
      <label for="velocidade" class="w-75 text-start">Informe a velocidade (em km/h):</label>
      <input id="velocidade"  class="swal2-input w-75 my-2">
      <label for="tempo" class="w-75 text-start mt-2">Informe o tempo (em horas):</label>
      <input id="tempo"  class="swal2-input w-75 my-2">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("velocidade").value,
        document.getElementById("tempo").value
      ];
    }
  });
  let velocidade = parseFloat(formValues[0]);
  let tempo = parseFloat(formValues[1]);
  if (hasValue(velocidade) && hasValue(tempo)) {
    let distancia = velocidade * tempo
    showSuccess("Cálculo de Distância", `A distância percorrida é de ${distancia} km`);
  } else showError();
}

async function exercicio5() {
  const num = parseInt((await Swal.fire({
    title: "Digite um número",
    input: "text",
  })).value);
  if (hasValue(num)) {
    let par = num % 2 == 0;
    showSuccess("Verificação de Número Par", par ? `${num} é PAR` : `${num} é ÍMPAR`);
  } else showError();
}


function hasValue(value) {
  // Check for undefined or null
  if (value === undefined || value === null) {
    return false;
  }

  // Check for empty string or string with only whitespace
  if (typeof value === 'string' && value.trim() === '') {
    return false;
  }

  // Check for NaN (note: typeof NaN is 'number')
  if (typeof value === 'number' && isNaN(value)) {
    return false;
  }

  // For numbers - all numbers are valid except NaN (already handled above)
  if (typeof value === 'number') {
    return true;
  }

  // For strings - non-empty strings are valid
  if (typeof value === 'string') {
    return true;
  }

  // For other types (boolean, object, etc.) - you might want to handle differently
  return false;
}

function showSuccess(title, text) {
  Swal.fire({
    title: title,
    text: text,
    icon: "success"
  });
}


function showError() {
  Swal.fire({
    title: "Problemas ao Executar",
    text: `Os valores necessários não foram inseridos corretamente ou sua digitação foi cancelada`,
    icon: "error"
  });
}


function round(value, points) {
  // First check if the value is a valid number
  if (typeof value !== 'number' || isNaN(value)) {
    return NaN;
  }

  // Handle cases where points is not a valid integer
  points = Math.floor(points); // Ensure points is an integer
  if (points < 0) points = 0;  // Don't allow negative decimal places

  // Special case for 0 decimal places (round to integer)
  if (points === 0) {
    return Math.round(value);
  }

  // Calculate the multiplier
  const multiplier = Math.pow(10, points);

  // Round the number
  return Math.round(value * multiplier) / multiplier;
}