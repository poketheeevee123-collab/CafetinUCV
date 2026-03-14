const productosIniciales = [
    { id: "PizzaChampiñone", nombre: "Pizza de Champiñones", precio: 4.00, imagen: "estilos/Imagenes/Comidas/PizzaChampiñones.jpeg" },
    { id: "PastaAlfredo", nombre: "Pasta Alfredo", precio: 2.50, imagen: "estilos/Imagenes/Comidas/PastaAlfredo.jpeg" },
    { id: "EmpanadaCazon", nombre: "4 Empanadas de Cazón", precio: 5.00, imagen: "estilos/Imagenes/Comidas/EmpanadasCazon.jpeg"},
    { id: "ReinaPepiada", nombre: "Reina Pepiada", precio: 2.50, imagen: "estilos/Imagenes/Comidas/ReinaPepiada.jpeg"},
    { id: "PizzaBarbacoa", nombre: "Pizza Barbacoa", precio: 4.00, imagen: "estilos/Imagenes/Comidas/PizzaBarbacoa.jpeg"},
    { id: "PastaCarbonara", nombre: "Pasta Carbonara", precio: 2.50, imagen: "estilos/Imagenes/Comidas/PastaCarbonara.webp"},
    { id: "EmpanadasQueso", nombre: "4 Empanadas Queso", precio: 4.00, imagen: "estilos/Imagenes/Comidas/EmpanadasQueso.jpeg"},
    { id: "Pabellon", nombre: "Pabellon Criollo", precio: 6.00, imagen: "estilos/Imagenes/Comidas/PabellonCriollo.jpeg"},
    { id: "PizzaMargatira", nombre: "Pizza Margarita", precio: 3.50, imagen: "estilos/Imagenes/Comidas/PizzaMargarita.webp"},
    { id: "PastaCarbonaraFungi", nombre: "Pasta Carbonara Fungi", precio: 3.00, imagen: "estilos/Imagenes/Comidas/PastaCarbonaraFungi.png"},
    { id: "EmpanadaPollo", nombre: "4 Empanadas de Pollo", precio: 5.00, imagen: "estilos/Imagenes/Comidas/EmpanadasPollo.jpeg"},
    { id: "omelette", nombre: "Frittata alla di funghi", precio: 1.50, imagen: "estilos/Imagenes/Comidas/FrittataAllaCremaDiFunghi.jpeg"},
    { id: "PizzaHawaina", nombre: "Pizza Hawaiana", precio: 4.00, imagen: "estilos/Imagenes/Comidas/PizzaHawaiana.jpeg"},
    { id: "PastaCerdeña", nombre: "Pasta Cerdeña", precio: 2.50, imagen: "estilos/Imagenes/Comidas/PastaCerdeña.jpeg"},
    { id: "EmpanadaPabellon", nombre: "4 Empanada de Pabellon", precio: 5.00, imagen: "estilos/Imagenes/Comidas/EmpanadasPabellon.jpeg"},
    { id: "CachapaQueso", nombre: "Cachapa de Queso", precio: 1.00, imagen: "estilos/Imagenes/Comidas/CachapaQueso.webp"}

];

if (!localStorage.getItem('productos')) {
    localStorage.setItem('productos', JSON.stringify(productosIniciales));
}

function obtenerProductos() {
    return JSON.parse(localStorage.getItem('productos'));
}

function guardarProductos(nuevosProductos) {
    localStorage.setItem('productos', JSON.stringify(nuevosProductos));
}
