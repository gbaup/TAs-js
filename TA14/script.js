const add = () => {
    let list = document.getElementById('lista');
    let item = document.createElement('li');
    item.textContent = 'Elemento ' + (list.childElementCount + 1);
    list.appendChild(item);
}