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
      var atividadePrincipal = "";
      dados.atividade_principal.forEach((value) => {
        atividadePrincipal += `<span>${value.code} - ${value.text}</span>`;
      });

      var atividadesSecundarias = "";
      dados.atividades_secundarias.forEach((value) => {
        atividadesSecundarias += `<span>${value.code} - ${value.text}</span>`;
      });

      document.getElementById("dados").innerHTML = `
    <span>Razão social: ${dados.nome}</span><br>
    <span>Natureza jurídica: ${dados.natureza_juridica}</span><br>
    <span>Nome fatansia: ${dados.fantasia}</span><br>
    <span>Bairro: ${dados.bairro}</span><br>
    <span>Porte: ${dados.porte}</span><br>
    <span>UF: ${dados.uf}</span><br>
    <span>Email: ${dados.email}</span><br>
    <span>Telefone: ${dados.telefone}</span><br>
    <span>CEP: ${dados.cep}</span><br>
    <span>Logradouro: ${dados.logradouro}</span><br>
    <div id='atividades'>
    <h3>Atividades principais: </h3>
      ${atividadePrincipal}
      </div>
    <div id='atividades'>
    <h3>Atividades Secundarias: </h3>
      ${atividadesSecundarias}
      </div>
    `;
    });
}
