document.addEventListener('DOMContentLoaded', function() {
    
    const menuNav = document.getElementById('menu-navegacion');
    const rol = localStorage.getItem("rolUsuario");

    if (menuNav) {

        if(rol == "Caja"){
            // Menú para Cajeros
            menuNav.innerHTML = `
            <a href="Caja.html" class="Perfil">Tu perfil</a>
            <a href="Caja.html" class="Reclamos">Gestionar Reclamos</a>
            <a href="Pedidos.html" class="Pagos1">Gestionar Pagos</a>
            `;
        }
        else if (rol === "Admin") {
            // Menú para Administradores
            menuNav.innerHTML = `
                <a href="Admin.html" class=" Perfil">Tu perfil</a>
                <a href="Admin.html" class="Users">Gestionar Users</a>
                <a href="Admin.html" class="Resenas">Gestionar Reseñas</a>
                <a href="Admin.html" type="Chat-bot" class="btn-Chatbot">Gestionar Chatbot</a>
                <a href="Admin.html" type="Reclamos" class="btn-Reclamos">Gestionar Reclamos</a>
                <a href="Pedidos.html" class="btn-Pagos">Gestionar Pagos</a>
                <a href="Carrito.html" class="1Stock">Visualizar Stock </a>
            `;
        } else {
            // Menú para Clientes
            menuNav.innerHTML = `
                <a href="Usuario.html" class="Perfil">Tu perfil</a>
                <a href="Usuario.html" class="Lealtad">Lealtad</a>
                <a href="Usuario.html" class="Resenas">Reseñas</a>
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
            window.location.href = "index.html"; 
        });
    }

    //Logica para aumentar Lealtad  
    const displayPuntos = document.getElementById('puntos-display');
    if (displayPuntos) {
        const puntos = localStorage.getItem("puntosLealtad") || 0;
        displayPuntos.innerText = puntos + " pts";
    }
});
