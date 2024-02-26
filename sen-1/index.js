function pesquisarCEP(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json`).then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            return document.getElementById("dados").innerHTML = `Ocorreu um erro ao pesquisar o CEP`
        }
    }).then((data) => {
        console.log(data)
        document.getElementById("dados").innerHTML = `
            Cidade: ${data.localidade}<br>
            Logradouro: ${data.logradouro.trim() == '' ? 'Nenhum' : data.logradouro}<br>
            DDD: ${data.ddd}<br>
            IBGE: ${data.ibge}<br>
            Estado: ${data.uf}<br>
        `
    }).catch((error) => {
        return document.getElementById("dados").innerHTML = `Ocorreu um erro ao pesquisar o CEP`
    })
}
