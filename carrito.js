document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('catalogo-productos');
    const listaArticulos = document.getElementById('lista-articulos');
    const totalDisplay = document.getElementById('precio-total');
    
    let totalGeneral = 0;
    let carrito = {}; 

    function renderizar() {
        const productos = obtenerProductos();
        contenedor.innerHTML = ""; 
        
        productos.forEach(prod => {
            const div = document.createElement('div');
            div.className = 'ColumnaProducto';
            div.innerHTML = `
                <img src="${prod.imagen}" class="catalogo">
                <h2>${prod.nombre}</h2>
                <p>Precio: ${prod.precio.toFixed(2)}$</p>
                <div class="Acciones">
                    <button class="Restar" data-id="${prod.id}">-</button>
                    <span id="cant-${prod.id}">0</span>
                    <button class="Actuar" data-id="${prod.id}">+</button>
                </div>
            `;
            contenedor.appendChild(div);
        });
    }

    contenedor.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (!id) return;

        const productos = obtenerProductos();
        const producto = productos.find(p => p.id === id);
        
        if (e.target.classList.contains('Actuar')) {
            carrito[id] = (carrito[id] || 0) + 1;
            totalGeneral += producto.precio;
        } else if (e.target.classList.contains('Restar') && carrito[id] > 0) {
            carrito[id]--;
            totalGeneral -= producto.precio;
        }

        document.getElementById(`cant-${id}`).innerText = carrito[id];
        totalDisplay.innerText = `${totalGeneral.toFixed(2)}$`;
        actualizarTicket(productos);
    });

    function actualizarTicket(productos) {
        listaArticulos.innerHTML = "";
        for (const id in carrito) {
            if (carrito[id] > 0) {
                const p = productos.find(prod => prod.id === id);
                const item = document.createElement('p');
                item.innerText = `${carrito[id]}x ${p.nombre} = ${(carrito[id] * p.precio).toFixed(2)}$`;
                listaArticulos.appendChild(item);
            }
        }
    }

    renderizar();
    const btnPedido = document.getElementById('RealizarPedido');
    if (btnPedido) {
        btnPedido.addEventListener('click', () => {

            if (totalGeneral > 0) {
        
                const puntosNuevos = Math.floor(totalGeneral / 10) * 20;

                let puntosActuales = parseInt(localStorage.getItem("puntosLealtad")) || 0;

                puntosActuales += puntosNuevos;
                localStorage.setItem("puntosLealtad", puntosActuales);

                const productos = obtenerProductos();
        

                const listaPedido = [];
        
                for (const id in carrito) {
                    if (carrito[id] > 0) {
                        const p = productos.find(prod => prod.id === id);
                        listaPedido.push(`${carrito[id]}x ${p.nombre} ($${p.precio.toFixed(2)} c/u)`);
                    }
                }
        

                const nuevoPedido = {
                    fecha: new Date().toLocaleDateString(),
                    productos: listaPedido,
                    total: totalGeneral.toFixed(2),
                    estado: "Pendiente"
                };
        

                let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
        

                pedidos.push(nuevoPedido);
        
                localStorage.setItem("pedidos", JSON.stringify(pedidos));
        
                alert(`¡Pedido realizado con éxito! Has ganado ${puntosNuevos} puntos. Total: $${totalGeneral.toFixed(2)}`);
        
                // Limpiar carrito
                carrito = {};
                totalGeneral = 0;
        
                location.reload();
        
            } else {
                alert("El carrito está vacío. Añade productos antes de pedir.");
            }
        
        
        });
    }
});

const nuevoPedido = {
    fecha: new Date().toLocaleDateString(),
    productos: listaPedido,
    total: totalGeneral.toFixed(2),
    estado: "Pendiente"
};