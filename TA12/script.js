const generatePassword = (length) => {
    const min = 'abcdefghijklmnopqrstuvwxyz';
    const may = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const num = '0123456789';
    const sim = '!@#$%^&*()_+';
    const all = [min, may, num, sim]

    let password = '';
    let i = 0;

    while (i < length) {
        const random = Math.floor(Math.random() * 4);
        const char = all[random][Math.floor(Math.random() * all[random].length)];
        password += char;
        i++;
    }

    return password;
}

console.log(generatePassword(8))