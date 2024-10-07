// ------------------ Cadastrar produto ------------------------>

document.getElementById('produtoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(this);
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

   
    fetch('http://localhost:8080/produtos', { 
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
        alert('Produto cadastrado com sucesso!');
        console.log(data);
  
        document.getElementById('produtoForm').reset();
    })
    .catch(error => {
        alert('Erro ao cadastrar produto: ' + error.message);
        console.error('Erro:', error);
    });
});

   

function buscarProduto() {
    // Fazer requisição AJAX para o endpoint localhost:8080/clientes
    fetch('http://localhost:8080/produtos', {
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
                    <td>${cliente.marca}</td>
                    <td>${cliente.valor}</td>                
                    `;
                    document.getElementById('resultados').appendChild(newRow);
                });
            })
            .catch(error => console.error('Erro ao buscar produtos:', error));
    }
