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

async function exercicio6() {
  const { value: formValues } = await Swal.fire({
    title: "Equação do 2º Grau (Delta)",
    html: `
      <label for="a" class="w-75 text-start">Informe o valor de 'a':</label>
      <input id="a"  class="swal2-input w-75 my-2">
      <label for="b" class="w-75 text-start mt-2">Informe o valor de 'b':</label>
      <input id="b"  class="swal2-input w-75 my-2">
      <label for="c" class="w-75 text-start mt-2">Informe o valor de 'c':</label>
      <input id="c"  class="swal2-input w-75 my-2">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("a").value,
        document.getElementById("b").value,
        document.getElementById("c").value
      ];
    }
  });
  let a = parseInt(formValues[0]);
  let b = parseInt(formValues[1]);
  let c = parseInt(formValues[2]);
  if (hasValue(a) && hasValue(b) && hasValue(c)) {
    let d = Math.pow(b, 2) - 4 * a * c;
    showSuccess("Equação do 2º Grau", `O valor de Delta é ${d}`);
  } else showError();
}

async function exercicio7() {
  const { value: formValues } = await Swal.fire({
    title: "Comparação de Valores",
    html: `
      <label for="num1" class="w-75 text-start">Informe o primeiro número:</label>
      <input id="num1"  class="swal2-input w-75 my-2">
      <label for="num2" class="w-75 text-start mt-2">Informe o segundo número:</label>
      <input id="num2"  class="swal2-input w-75 my-2">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("num1").value,
        document.getElementById("num2").value
      ];
    }
  });
  let num1 = parseInt(formValues[0]);
  let num2 = parseInt(formValues[1]);
  if (hasValue(num1) && hasValue(num2)) {
    let dif = num1 > num2 ? num1 - num2 : num2 - num1;
    showSuccess("Comparação de Valores", `${num1 > num2 && dif > 10}`);
  } else showError();
}

async function exercicio8() {
  const { value: formValues } = await Swal.fire({
    title: "Cálculo de Salário Líquido",
    html: `
      <label for="salBruto" class="w-75 text-start">Informe o salário bruto:</label>
      <input id="salBruto"  class="swal2-input w-75 my-2">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("salBruto").value,
      ];
    }
  });
  let salBruto = parseFloat(formValues[0]);
  if (hasValue(salBruto)) {
    let salLiquido = salBruto - (salBruto * ((10.0 + 15.0)/100.0));
    showSuccess("Cálculo de Salário Líquido", `R$ ${salLiquido}`);
  } else showError();
}

async function exercicio9() {
  const { value: formValues } = await Swal.fire({
    title: "Verificação de Triângulo Válido",
    html: `
      <label for="a" class="w-75 text-start">Informe o valor do lado 'a':</label>
      <input id="a"  class="swal2-input w-75 my-2">
      <label for="b" class="w-75 text-start mt-2">Informe o valor do lado 'b':</label>
      <input id="b"  class="swal2-input w-75 my-2">
      <label for="c" class="w-75 text-start mt-2">Informe o valor do lado 'c':</label>
      <input id="c"  class="swal2-input w-75 my-2">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("a").value,
        document.getElementById("b").value,
        document.getElementById("c").value
      ];
    }
  });
  let a = parseInt(formValues[0]);
  let b = parseInt(formValues[1]);
  let c = parseInt(formValues[2]);
  if (hasValue(a) && hasValue(b) && hasValue(c)) {
    let triangulo = (a < b + c) && (b < a + c) && (c < a + b);
    showSuccess("Verificação de Triângulo", `${triangulo ? 'Os lados formam um triângulo' : 'Os lados não formam um triângulo'}`);
  } else showError();
}

async function exercicio10() {
  const { value: formValues } = await Swal.fire({
    title: "Cálculo de Resistência Equivalente",
    html: `
      <label for="r1" class="w-75 text-start">Informe o valor do 1º resistor:</label>
      <input id="r1"  class="swal2-input w-75 my-2">
      <label for="r2" class="w-75 text-start mt-2">Informe o valor do 2º resistor:</label>
      <input id="r2"  class="swal2-input w-75 my-2">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("r1").value,
        document.getElementById("r2").value
      ];
    }
  });
  let r1 = parseFloat(formValues[0]);
  let r2 = parseFloat(formValues[1]);
  if (hasValue(r1) && hasValue(r2)) {
    let req = (r1 * r2) / (r1 + r2);
    showSuccess("Cálculo de Resistência Equivalente", `O resultado é ${round(req, 2)}`);
  } else showError();
}

// Função para verificar se variável possui valor válido
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

// Função de exibição de mensagem com resultado
function showSuccess(title, text) {
  Swal.fire({
    title: title,
    text: text,
    icon: "success"
  });
}

// Função de exibição de erro padrão
function showError() {
  Swal.fire({
    title: "Problemas ao Executar",
    text: `Os valores necessários não foram inseridos corretamente ou sua digitação foi cancelada`,
    icon: "error"
  });
}

// Função de arredondamento de valores
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