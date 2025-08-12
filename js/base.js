let globalList;
async function loadData(file, containerId = 'paCards') {
  fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao carregar o arquivo JSON");
      }
      return response.json();
    })
    .then(data => {
      const list = Array.isArray(data) ? data : [data];
      globalList = list;
      const container = document.getElementById(containerId);
      container.innerHTML = '';
      list.forEach(pa => {
        container.innerHTML += createCard(pa);
      });
    })
    .catch(error => {
      console.error('Erro ao carregar o JSON:', error);
      document.getElementById(containerId).innerHTML = `
        <div class="alert alert-danger">
          Falha ao carregar. Tente recarregar a página.
        </div>
      `;
    });
};

function createCard(data) {
  return `<div class="col">
            <div class="card h-100">
                <div class="card-header">
                  <h5 class="card-title my-1">${data.name}</h5>
                </div>
                <div class="card-body">
                    <p class="card-text">
                        ${data.description}
                    </p>
                </div>
                <div class="card-footer">
                  <button type="button" class="btn btn-primary w-100 mb-2" onclick="${data.function}()" ${hasValue(data.function) ? '' : 'disabled'}>Executar</button>
                  <button type="button" class="btn btn-info w-100" onclick="showModal(${data.id})" ${hasValue(data.code) ? '' : 'disabled'}>Exibir Código</button>
                </div>
            </div>
          </div>`
}

function showModal(id) {
  const modal = new bootstrap.Modal(document.getElementById('exModal'));
  let data = globalList.find(item => item.id === id);
  document.querySelector('.modal-title').innerHTML = data.name;
  document.querySelector('#result').innerHTML = data.code;
  modal.show();
}

function hasValue(value) {
  return (value != '' && value != undefined);
}