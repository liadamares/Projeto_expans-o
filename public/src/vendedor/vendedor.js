// ------------------ Cadastrar produto ------------------------>

document.getElementById('vendedorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const formData = new FormData(this);
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

   
    fetch('http://localhost:8080/vendedores', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na solicitação: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        alert('Vendedor cadastrado com sucesso!');
        console.log(data);
        // Aqui você pode adicionar qualquer lógica adicional, como limpar o formulário
        document.getElementById('vendedorForm').reset();
    })
    .catch(error => {
        alert('Erro ao cadastrar vendedor: ' + error.message);
        console.error('Erro:', error);
    });
});

    // ------------------ Consultar vendedor ------------------------>

function buscarVendedor() {
    // Fazer requisição AJAX para o endpoint localhost:8080/vendedores
    fetch('http://localhost:8080/vendedores', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }})
        .then(response => response.json())
        .then(data => {
            // Limpar o conteúdo atual da tabela
            document.getElementById('resultados').innerHTML = '';
            // Iterar sobre os dados retornados e adicionar linhas à tabela
            data.forEach(vendedor => {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${vendedor.nome}</td>
                    <td>${vendedor.email}</td>
                    `;
                    document.getElementById('resultados').appendChild(newRow);
                });
            })
            .catch(error => console.error('Erro ao buscar vendedor:', error));
    }