document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario

    // Obtiene los valores del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(boton =1){
        window.location.href = 'index.html';
    }

    // Aquí iría la lógica para enviar los datos de inicio de sesión al servidor y autenticar al usuario
    console.log('Iniciando sesión...');
});