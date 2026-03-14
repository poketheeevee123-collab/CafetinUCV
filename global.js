document.addEventListener('DOMContentLoaded', function() {
    
    const menuNav = document.getElementById('menu-navegacion');
    const rol = localStorage.getItem("rolUsuario");

    if (menuNav) {

        if(rol == "Caja"){
            // Menú para Cajeros
            menuNav.innerHTML = `
            <a href="Caja.html" class="Perfil">Tu perfil</a>
            <a href="Pedidos.html" class="Pagos1">Gestionar Pagos</a>
            `;
        }
        else if (rol === "Admin") {
            // Menú para Administradores
            menuNav.innerHTML = `
                <a href="Admin.html" class=" Perfil">Tu perfil</a>
                <a href="Pedidos.html" class="Pagos">Gestionar Pagos</a>
                <a href="Carrito.html" class="1Stock">Visualizar Stock </a>
            `;
        } else {
            // Menú para Clientes
            menuNav.innerHTML = `
                <a href="Usuario.html" class="Perfil">Tu perfil</a>
                <a href="historial.html" class="Historial">Historial</a>
                <a href="Carrito.html" class="Carrito1">Carrito</a>
            `;
        }
    }

    // Lógica para Cerrar Sesión
    const logoutBtn = document.getElementById('logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem("rolUsuario"); // Limpiar el rol al salir
            window.location.href = "Login.html"; 
        });
    }

    //Logica para aumentar Lealtad  
    const displayPuntos = document.getElementById('puntos-display');
    if (displayPuntos) {
        const puntos = localStorage.getItem("puntosLealtad") || 0;
        displayPuntos.innerText = puntos + " pts";
    }
});