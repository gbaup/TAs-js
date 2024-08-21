const buscar =
    () => {
        let input = document.getElementById('buscador').value.toLowerCase();
        let lista = document.getElementById('listaNombres');
        let nombres = lista.getElementsByTagName('li');
        for (let i = 0; i < nombres.length; i++) {
            let nombre = nombres[i].textContent;
            if (nombre.toLowerCase().indexOf(input) > -1) {
                nombres[i].style.display = '';
            } else {
                nombres[i].style.display = 'none';
            }
        }
    }