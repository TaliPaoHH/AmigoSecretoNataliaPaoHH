// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (!nombreAmigo) {
        alert('Por favor ingresa un nombre válido');
        return;
    }

    // Agregar nombre al array y actualizar la lista
    amigos.push(nombreAmigo);
    actualizarListaAmigos();
    inputAmigo.value = ''; // Limpiar el campo de entrada
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar lista antes de actualizar

    amigos.forEach(amigo => {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigo;
        listaAmigos.appendChild(elementoLista);
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores

    // Validar que haya amigos para sortear
    if (amigos.length === 0) {
        alert('Agrega al menos un amigo antes de sortear');
        return;
    }

    // Generar índice aleatorio y mostrar resultado
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const elementoResultado = document.createElement('li');
    elementoResultado.textContent = amigos[indiceAleatorio];
    resultado.appendChild(elementoResultado);
}