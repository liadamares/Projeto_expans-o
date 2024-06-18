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

