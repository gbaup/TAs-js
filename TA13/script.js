const changeText = () => {
    console.log('changeText')

    const text = document.getElementById('text')
    text.innerHTML = randomText()


}

const randomText = () => {
    const texts = [
        'Texto cambiado 1',
        'Texto cambiado 2',
        'Texto cambiado 3',
        'Texto cambiado 4',
    ]

    const random = Math.floor(Math.random() * texts.length)
    return texts[random]
}

