document.addEventListener('DOMContentLoaded', () => {
    const tabla = document.getElementById('cuerpo-tabla-admin');
    const btnAnadir = document.getElementById('anadir-producto');

    function cargarTabla() {
        const productos = obtenerProductos();
        tabla.innerHTML = "";

        productos.forEach(p => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${p.nombre}</td>
                <td>${p.precio.toFixed(2)}$</td>
                <td><input type="number" id="input-${p.id}" step="0.5" value="${p.precio}"></td>
                <td><button class="actualizar" onclick="cambiarPrecio('${p.id}')">Actualizar</button></td>
                <td><button class="eliminar" onclick="eliminarProducto('${p.id}')">Eliminar</button></td>
            `;
            tabla.appendChild(tr);
        });
    }

    // Función para actualizar precio
    window.cambiarPrecio = (id) => {
        const input = document.getElementById(`input-${id}`);
        const nuevoPrecio = parseFloat(input.value);

        if (isNaN(nuevoPrecio) || nuevoPrecio < 0) {
            alert("Por favor, ingrese un precio válido.");
            return;
        }

        let productos = obtenerProductos();
        productos = productos.map(p => p.id === id ? {...p, precio: nuevoPrecio} : p);
        
        guardarProductos(productos);
        alert("Precio actualizado con éxito");
        cargarTabla();
    };

    //Función para eliminar producto
    window.eliminarProducto = (id) => {
        if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
            let productos = obtenerProductos();
            
            productos = productos.filter(p => p.id !== id);
            
            guardarProductos(productos);
            cargarTabla(); 
        }
    };

    // Función para cargar la tabla de reseñas
    function cargarResenas() {
    const tablaResenas = document.getElementById('Reseña-tabla');
    if (!tablaResenas) return;

    const resenas = obtenerResenas();
    tablaResenas.innerHTML = "";

    resenas.forEach(r => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${r.usuario}</td>
            <td>"${r.texto}"</td>
            <td>
                <button class="eliminar" onclick="eliminarResena(${r.id})">Eliminar</button>
            </td>
        `;
        tablaResenas.appendChild(tr);
    });
}

// Función para eliminar reseña
    window.eliminarResena = (id) => {
    if (confirm("¿Eliminar esta reseña permanentemente?")) {
        let resenas = obtenerResenas();
        resenas = resenas.filter(r => r.id !== id);
        guardarResenas(resenas);
        cargarResenas();
    }
};

    if (btnAnadir) {
        btnAnadir.addEventListener('click', async (event) => {
            event.preventDefault();

            const idInput = document.getElementById('nuevo-id');
            const nombreInput = document.getElementById('nuevo-nombre');
            const precioInput = document.getElementById('nuevo-precio');
            const imagenInput = document.getElementById('nuevo-imagen');

            const id = idInput.value.trim();
            const nombre = nombreInput.value.trim();
            const precio = parseFloat(precioInput.value);
            
            const archivo = imagenInput.files ? imagenInput.files[0] : null;


            if (!id || !nombre || isNaN(precio) || !archivo) {
                alert("Error: Todos los campos son obligatorios, incluyendo la imagen del equipo.");
                return;
            }

         
            const leerArchivo = (file) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = (err) => reject(err);
                    reader.readAsDataURL(file);
                });
            };

            try {

                const imagenBase64 = await leerArchivo(archivo);
                
                let productos = obtenerProductos();

                if (productos.some(p => p.id === id)) {
                    alert("El ID ya existe. Por favor, usa un código único.");
                    return;
                }

               
                const nuevoProducto = { id, nombre, precio, imagen: imagenBase64 };
                productos.push(nuevoProducto);
                
                guardarProductos(productos);
                alert(`¡${nombre} ha sido añadido al catálogo con éxito!`);

                //Limpiamos el formulario
                idInput.value = "";
                nombreInput.value = "";
                precioInput.value = "";
                imagenInput.value = ""; 

                cargarTabla();
            } catch (error) {
                alert("Hubo un error al procesar la imagen seleccionada.");
                console.error(error);
            }
        });
    }
    
    cargarResenas();
    cargarTabla();
});