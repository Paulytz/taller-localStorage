document.addEventListener('DOMContentLoaded', () => {
    //la variable inputDato almacena el texto ingresado en el campo de texto inputText
    const inputDato = document.getElementById('inputText').value;
    //botonGuardar almacena el texto una vez que el usuario presiona buttonText
    const botonGuardar = document.getElementById('buttonText');

    //Almacena el valor de dato en el localStorage
    botonGuardar.addEventListener('click', () => {
        const dato = inputDato.value;
        localStorage.setItem('dato', dato);
    })
});