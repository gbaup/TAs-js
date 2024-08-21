const screenSize = () => {
    const containerSize = document.getElementById('size')
    containerSize.innerHTML = `Width: ${window.innerWidth} Height: ${window.innerHeight}`
}

window.onresize = screenSize;
