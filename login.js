document.addEventListener('DOMContentLoaded', function() {
    
    const botonIngresar = document.getElementById('botonlog');

    botonIngresar.addEventListener('click', function(event) {

        event.preventDefault();

        const usuarioIngresado = document.getElementById('username').value;
        const claveIngresada = document.getElementById('password').value;

        const credenciales = {
            admin: { usuario: "adminRoot", clave: "cafetinAdmin", pagina: "Admin.html" },
            caja: { usuario: "caja_01", clave: "Cajero#123", pagina: "Caja.html" },
            cliente: { usuario: "ClienteUCV", clave: "Central_123", pagina: "Usuario.html" }
        }

        if (usuarioIngresado === credenciales.admin.usuario && claveIngresada === credenciales.admin.clave) {
            localStorage.setItem("rolUsuario", "Admin");
            alert("¡Bienvenido Administrador!");
            window.location.href = credenciales.admin.pagina; // Redirige a Admin.html
        } 
        else if (usuarioIngresado === credenciales.caja.usuario && claveIngresada === credenciales.caja.clave) {
            localStorage.setItem("rolUsuario", "Caja");
            alert("¡Bienvenido Cajero!");
            window.location.href = credenciales.caja.pagina; // Redirige a Caja.html
        }
        else if (usuarioIngresado === credenciales.cliente.usuario && claveIngresada === credenciales.cliente.clave) {
            localStorage.setItem("rolUsuario", "Cliente");
            alert("¡Bienvenido Cliente!");
            window.location.href = credenciales.cliente.pagina; // Redirige a Usuario.html
        }
        else {

            alert("Usuario o contraseña incorrectos. Intenta de nuevo.");
        }
    });
});