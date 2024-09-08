document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);

    // Aquí podrías hacer una petición fetch() para enviar los datos a un servidor
    alert('Formulario enviado con éxito');
});
