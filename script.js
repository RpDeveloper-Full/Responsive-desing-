const boton = document.getElementById("cambiarTamanio");
const texto = document.querySelector(".texto");

let grande = false;

boton.addEventListener("click", () => {
    if (grande) {
        texto.style.fontSize = "1em"; // tamaño normal
        boton.textContent = "Cambiar tamaño";
    } else {
        texto.style.fontSize = "2em"; // el doble del tamaño base
        boton.textContent = "Restaurar tamaño";
    }
    grande = !grande;
});
