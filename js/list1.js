document.addEventListener("DOMContentLoaded", function () {
  loadData('data/list1.json');
});




async function exercicio5() {
  const { value: num } = await Swal.fire({
    title: "Digite um número",
    input: "text",
    inputLabel: "",
    showCancelButton: true,
  });
  if (num) {
    let par = num % 2 == 0;
    Swal.fire({
      title: "É par?",
      text: par ? 'Verdadeiro' : 'Falso',
      icon: "success"
    });
  }
}