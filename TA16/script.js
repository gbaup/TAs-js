const ocultarMostrar = () => {
    const div = document.getElementById('item');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}