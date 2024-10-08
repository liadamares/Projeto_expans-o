document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const formData = new FormData(this);
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    fetch('http://localhost:8080/clientes', { 
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
        alert('Cliente cadastrado com sucesso!');
        console.log(data);

        document.getElementById('clienteForm').reset();
    })
    .catch(error => {
        alert('Erro ao cadastrar cliente: ' + error.message);
        console.error('Erro:', error);
    });
});

// ------------------ Consultar Cliente ------------------------>

function buscarCliente() {
    // Fazer requisição AJAX para o endpoint localhost:8080/clientes
    fetch('http://localhost:8080/clientes', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }})
        .then(response => response.json())
        .then(data => {
            
            document.getElementById('resultados').innerHTML = '';

            data.forEach(cliente => {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${cliente.nome}</td>
                    <td>${cliente.cpf}</td>
                    <td>${cliente.email}</td>
                    <td>${cliente.endereco}</td>
                  
                    `;
                    document.getElementById('resultados').appendChild(newRow);
                });
            })
            .catch(error => console.error('Erro ao buscar clientes:', error));
    }
