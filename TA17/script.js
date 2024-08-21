const aumentarContador = () => {
    let contador = document.getElementById('contador').innerHTML;
    contador++;
    document.getElementById('contador').innerHTML = contador;
}