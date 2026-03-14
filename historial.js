document.addEventListener('DOMContentLoaded', () => {

    const tabla = document.getElementById('cuerpo-historial');

    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    pedidos.reverse();

    tabla.innerHTML = "";

    pedidos.forEach((pedido, index) => {

        const tr = document.createElement('tr');

        const idOriginal = pedidos.length - 1 - index;

        const claseEstado = pedido.estado === "Validado" ? "Valido" : "Pendiente";

        const botonReclamo = pedido.estado === "Validado" 
            ? `<button class="Reclamo" data-id="${idOriginal}">Emitir Reclamo</button>` 
            : `<span class="espera-validacion">Pendiente de validación</span>`;

        tr.innerHTML = `
            <td>${pedido.fecha}</td>            
            <td>${pedido.productos.join(", ")}</td>
            <td>$${pedido.total}</td>
            <td><span class="${claseEstado}">${pedido.estado}</span></td>
            <td>${botonReclamo}</td>
        `;

        tabla.appendChild(tr);

    });

});