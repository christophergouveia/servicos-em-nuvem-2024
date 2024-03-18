let headers = new Headers();

function pesquisarCNPJ(cnpj) {
  fetch(
    "https://cors-anywhere.herokuapp.com/https://receitaws.com.br/v1/cnpj/" +
      cnpj,
    {
      method: "GET",
      headers: headers,
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((dados) => {
      console.log(dados);
      if (dados.status == "ERROR") {
        return (document.getElementById("dados").innerHTML = `
            ${dados.message}`);
      }
      document.getElementById("dados").innerHTML = `
    <span>Razão social: ${dados.nome}</span><br>
    <span>Natureza jurídica: ${dados.natureza_juridica}
    `;
    });
}
