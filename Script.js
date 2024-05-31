document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.btn-login').addEventListener('click', () => {
        const usuario = document.querySelector('input[name="usuario"]').value;
        const senha = document.querySelector('input[name="senha"]').value;

        if (usuario === 'admin' && senha === 'admin') {
            window.location.href = 'dashboard.html';
        } else {
            alert('Usuário ou senha incorretos');
        }
    });
});

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.querySelector("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.querySelector("main").style.marginLeft= "0";
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('clienteForm')?.addEventListener('submit', function (e) {
        e.preventDefault();
        
    });

    document.getElementById('buscarClienteForm')?.addEventListener('submit', function (e) {
        e.preventDefault();

        const resultados = document.getElementById('resultados');
        resultados.innerHTML = `
            <tr>
                <td>Cliente Exemplo</td>
                <td>cliente@exemplo.com</td>
                <td>(11) 99999-9999</td>
                <td>Produto A, Produto B</td>
                <td>Vendedor X</td>
                <td>Mensal</td>
            </tr>
        `;
    });

    document.getElementById('produtoForm')?.addEventListener('submit', function (e) {
        e.preventDefault();
        
    });

    document.getElementById('buscarProdutoForm')?.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const resultados = document.getElementById('resultados');
        resultados.innerHTML = `
            <tr>
                <td>Produto Exemplo</td>
                <td>Descrição do Produto</td>
                <td>R$ 99,99</td>
                <td>50</td>
            </tr>
        `;
    });

    document.getElementById('vendedorForm')?.addEventListener('submit', function (e) {
        e.preventDefault();
        
    });
});