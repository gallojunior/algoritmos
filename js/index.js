document.addEventListener("DOMContentLoaded", function () {
  fetch('data/home.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao carregar o arquivo JSON");
      }
      return response.json();
    })
    .then(data => {
      const paList = Array.isArray(data) ? data : [data];
      const paContainer = document.getElementById('cards');
      paContainer.innerHTML = '';
      paList.forEach(pa => {
        paContainer.innerHTML += createCard(pa);
      });
    })
    .catch(error => {
      console.error('Erro ao carregar o JSON:', error);
      document.getElementById('cards').innerHTML = `
        <div class="alert alert-danger">
          Falha ao carregar. Tente recarregar a página.
        </div>
      `;
    });
});

function createCard(data) {
  let r = `<div class="col">
            <div class="card h-100 ${hasValue(data.url) ? 'cursor-pointer' : ''}">
                <div class="card-header" ${hasValue(data.url) ? 'title="Clique para ver Exercícios na Prática"' : ''}>
                  <h5 class="card-title my-1">${data.name}</h5>
                </div>
                <div class="card-body" onclick="openUrl('${data.url}')" ${hasValue(data.url) ? 'title="Clique para ver Exercícios na Prática"' : ''}>
                    <p class="card-text">
                        ${data.description}
                    </p>
                    <b>Exemplo:</b>
                    <pre>${data.example}</pre>
                </div>
                <div class="card-footer">
                  <button type="button" class="btn btn-primary w-100 mb-2" onclick="showModal('${data.name}', '${data.content}')" ${hasValue(data.content) ? '' : 'disabled'}>
                    Material de Apoio
                  </button>
                  <button type="button" class="btn btn-secondary w-100" onclick="showModal('${data.name}', '${data.exercises}')" ${hasValue(data.exercises) ? '' : 'disabled'}>
                    Baixar Lista de Exercícios
                  </button>
                </div>
            </div>
          </div>`;
  return r;
}


function openUrl(url) {
  if (url == '' || url == undefined)
    return;
  window.location = url;
}

function showModal(title, file) {
  const modal = new bootstrap.Modal(document.getElementById('exModal'));
  document.querySelector('.modal-title').innerHTML = title;
  document.querySelector('#filePdf').src = file;
  modal.show();
}

function hasValue(value) {
  return (value != '' && value != undefined);
}