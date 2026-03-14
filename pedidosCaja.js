document.addEventListener('DOMContentLoaded', () => {

    const tabla = document.getElementById("tabla-pedidos");

    function cargarPedidos() {

        let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
        pedidos.reverse();

        tabla.innerHTML = "";

        pedidos.forEach((pedido, index) => {

            const tr = document.createElement("tr");

            const idOriginal = pedidos.length - 1 - index;

            tr.innerHTML = `
                <td>${pedido.fecha}</td>
                <td>${pedido.productos.join(", ")}</td>
                <td>$${pedido.total}</td>
                <td><span class="${pedido.estado === 'Pendiente' ? 'xValidar' : 'PagoValido'}">${pedido.estado}</span></td>
                <td>
                    <button class="Validar" data-id="${idOriginal}">
                        Validar
                    </button>
                </td>

            `;

            tabla.appendChild(tr);

        });

    }

    tabla.addEventListener("click", (e) => {
        if (e.target.classList.contains("Validar")) {
            
            const confirmar = confirm("¿Estás seguro de que deseas validar este pedido?");

            if (confirmar) {
                const id = e.target.dataset.id;
                let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

                pedidos[id].estado = "Validado";

                localStorage.setItem("pedidos", JSON.stringify(pedidos));

                cargarPedidos();
                
                alert("Recibo Emitido ¡Gracias por su compra!");
            }
        }
    });

    cargarPedidos();
});