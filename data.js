document.addEventListener('DOMContentLoaded', function (){ 
    
    //busca en el DOM un elemento que tenga el el ID data donde se mostrará la información del localStorage
    const showData = document.getElementById('data');

    //este método recupera el valor almacenado en el localStorage con la clave 'dato'
    showData.innerText = localStorage.getItem('dato');
});