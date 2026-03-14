const resenasIniciales = [
    { id: 1, usuario: "GaboUCV", texto: "¡El café de la facultad es el mejor para estudiar!" },
    { id: 2, usuario: "Ana_Ing", texto: "Las empanadas de cazón siempre están calientes." },
    { id: 3, usuario: "Pedro_UCV", texto: "Excelente atención en el cafetín." },
    { id: 4, usuario: "Elias", texto: "Dame 20 Joseph." },
    { id: 5, usuario: "Manuel", texto: "Se donde vives Joseph."}
];

function obtenerResenas() {
    const almacenadas = localStorage.getItem("resenas");
    return almacenadas ? JSON.parse(almacenadas) : resenasIniciales;
}

function guardarResenas(resenas) {
    localStorage.setItem("resenas", JSON.stringify(resenas));
}