// Lista de usuários registrados (simulado, poderia ser um banco de dados real)
let registeredUsers = [
    { username: 'user', password: 'password' }
];

// Select elementos
const loginForm = document.getElementById('loginForm');
const registerButton = document.getElementById('registerButton');

// Adiciona event listeners
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Obtém valores dos inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica se o usuário e senha correspondem a um registro válido
    const user = registeredUsers.find(user => user.username === username && user.password === password);
    if (user) {
        alert('Login bem sucedido');
    } else {
        alert('Usuário ou senha inválidos');
    }
});

registerButton.addEventListener('click', function() {
    // Obtém valores dos inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica se o usuário já está registrado
    const userExists = registeredUsers.some(user => user.username === username);
    if (userExists) {
        alert('Usuário já registrado');
    } else {
        // Adiciona novo usuário à lista
        registeredUsers.push({ username, password });
        alert('Registro bem sucedido');
    }
});
